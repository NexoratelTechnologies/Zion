import { requireRole } from "../../../../lib/auth-utils";
import { prisma } from "../../../../lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContentEditor from "./ContentEditor";
import styles from "./page.module.css";

export default async function EditContentPage({ params }) {
  await requireRole("ADMIN");

  const { id } = await params;

  const content = await prisma.siteContent.findUnique({
    where: {
      id,
    },
  });

  if (!content) {
    notFound();
  }

  return (
    <main className={styles.editorPage}>
      {/* TOP NAVIGATION */}
      <div className={styles.topBar}>
        <Link href="/admin/content" className={styles.backLink}>
          <i className="fa-solid fa-arrow-left"></i>
          Back to Site Content
        </Link>

        <span className={styles.adminLabel}>
          <i className="fa-solid fa-lock"></i>
          ADMIN ONLY
        </span>
      </div>

      {/* HEADER */}
      <section className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine}></span>
          CONTENT EDITOR
        </div>

        <h1>Edit Content</h1>

        <p>
          Update this content item and save your changes to reflect them on the
          Zion website.
        </p>

        <div className={styles.contentKey}>
          <i className="fa-solid fa-code"></i>
          <span>{content.key}</span>
        </div>
      </section>

      {/* EDITOR */}
      <section className={styles.editorCard}>
        <div className={styles.editorHeader}>
          <div>
            <span className={styles.editorEyebrow}>EDITING</span>

            <h2>{formatContentKey(content.key)}</h2>
          </div>

          <div className={styles.status}>
            <span></span>
            Active
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.editorBody}>
          <ContentEditor content={content} />
        </div>
      </section>

      {/* FOOTER NOTE */}
      <div className={styles.footerNote}>
        <i className="fa-solid fa-circle-info"></i>

        <span>
          Changes are saved to the Zion content database and will be used by the
          website wherever this content item is displayed.
        </span>
      </div>
    </main>
  );
}

function formatContentKey(key) {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}
