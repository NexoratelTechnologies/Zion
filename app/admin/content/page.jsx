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
      <div className={styles.header}>
        <div className={styles.headerText}>
          <span className={styles.eyebrow}>admin</span>
          <h1>Site Content</h1>
          <p>Manage the content used throughout the Zion website.</p>
        </div>

        <Link href="/admin/content/new" className={styles.addButton}>
          <i className="fa-solid fa-plus"></i>
          Add Content
        </Link>
      </div>

      {content.length === 0 ? (
        <div className={styles.emptyState}>No content has been created yet.</div>
      ) : (
        <section className={styles.contentList}>
          {content.map((item) => (
            <div key={item.id} className={styles.contentCard}>
              <h2>{item.key}</h2>

              <pre className={styles.contentPreview}>
                {JSON.stringify(item.value, null, 2)}
              </pre>

              <Link
                href={`/admin/content/${item.id}`}
                className={styles.editLink}
              >
                Edit
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
