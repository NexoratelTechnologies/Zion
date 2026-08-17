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
    <main className={styles.editPage}>
      <Link href="/admin/content" className={styles.backLink}>
        <i className="fa-solid fa-arrow-left"></i>
        Back to Site Content
      </Link>

      <div className={styles.header}>
        <span className={styles.eyebrow}>edit content</span>
        <h1>Edit Content</h1>

        <p className={styles.keyLine}>
          <strong>Key:</strong> {content.key}
        </p>
      </div>

      <ContentEditor content={content} />
    </main>
  );
}
