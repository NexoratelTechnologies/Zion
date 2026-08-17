import { requireRole } from "../../../lib/auth-utils";
import { prisma } from "../../../lib/prisma";
import Link from "next/link";
import styles from "./page.module.css";

export default async function ContentPage() {
  await requireRole("ADMIN");

  const content = await prisma.siteContent.findMany({
    orderBy: {
      key: "asc",
    },
  });

  return (
    <main className={styles.contentPage}>
      {/* HEADER */}
      <section className={styles.pageHeader}>
        <div>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine}></span>
            WEBSITE MANAGEMENT
          </div>

          <h1>Site Content</h1>

          <p>
            Update the words, links, images, and other content displayed across
            the Zion website.
          </p>
        </div>

        <Link href="/admin" className={styles.backButton}>
          <i className="fa-solid fa-arrow-left"></i>
          Dashboard
        </Link>
      </section>

      {/* CONTENT TOOLBAR */}
      <section className={styles.toolbar}>
        <div>
          <span className={styles.toolbarLabel}>CONTENT LIBRARY</span>
          <strong>
            {content.length} {content.length === 1 ? "item" : "items"}
          </strong>
        </div>

        <Link href="/admin/content/new" className={styles.addButton}>
          <i className="fa-solid fa-plus"></i>
          Add Content
        </Link>
      </section>

      {/* CONTENT LIST */}
      <section className={styles.contentList}>
        {content.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <i className="fa-solid fa-file-circle-plus"></i>
            </div>

            <h2>No site content yet</h2>

            <p>
              Create your first content item to begin managing the information
              displayed on the Zion website.
            </p>

            <Link href="/admin/content/new" className={styles.emptyButton}>
              Add Content
            </Link>
          </div>
        ) : (
          content.map((item) => (
            <article className={styles.contentCard} key={item.id}>
              <div className={styles.cardMain}>
                <div className={styles.contentIcon}>
                  <i className="fa-solid fa-file-lines"></i>
                </div>

                <div className={styles.contentInfo}>
                  <span className={styles.contentType}>CONTENT ITEM</span>

                  <h2>{formatContentKey(item.key)}</h2>

                  <code>{item.key}</code>

                  <div className={styles.preview}>{getPreview(item.value)}</div>
                </div>
              </div>

              <div className={styles.cardAction}>
                <Link
                  href={`/admin/content/${item.id}`}
                  className={styles.editButton}
                >
                  <span>Edit</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </article>
          ))
        )}
      </section>

      {/* FOOTER NOTE */}
      {content.length > 0 && (
        <div className={styles.pageNote}>
          <i className="fa-solid fa-circle-info"></i>

          <span>
            Changes made here are used by the live Zion website wherever the
            corresponding content item is displayed.
          </span>
        </div>
      )}
    </main>
  );
}

/**
 * Turns keys such as:
 * home_featured_sermon
 * home_prayer_camp_block
 * contact_phone
 *
 * into readable titles.
 */
function formatContentKey(key) {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

/**
 * Creates a short readable preview instead of dumping
 * the entire JSON object onto the page.
 */
function getPreview(value) {
  if (value === null || value === undefined) {
    return "No content available";
  }

  if (typeof value === "string") {
    return value.length > 120 ? `${value.slice(0, 120)}...` : value;
  }

  if (Array.isArray(value)) {
    return `${value.length} ${
      value.length === 1 ? "content item" : "content items"
    }`;
  }

  if (typeof value === "object") {
    const entries = Object.entries(value);

    if (entries.length === 0) {
      return "Empty content";
    }

    const firstValues = entries
      .slice(0, 2)
      .map(([key, val]) => {
        if (typeof val === "string") {
          return `${key}: ${val}`;
        }

        return `${key}: ${JSON.stringify(val)}`;
      })
      .join(" • ");

    return firstValues.length > 150
      ? `${firstValues.slice(0, 150)}...`
      : firstValues;
  }

  return String(value);
}
