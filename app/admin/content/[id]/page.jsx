import { requireRole } from "../../../../lib/auth-utils";
import { prisma } from "../../../../lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContentEditor from "./ContentEditor";

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
    <main>
      <Link href="/admin/content">← Back to Site Content</Link>

      <h1>Edit Content</h1>

      <p>
        <strong>Key:</strong> {content.key}
      </p>

      <ContentEditor content={content} />
    </main>
  );
}
