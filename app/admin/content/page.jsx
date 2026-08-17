import { requireRole } from "../../../lib/auth-utils";
import { prisma } from "../../../lib/prisma";
import Link from "next/link";

export default async function ContentPage() {
  await requireRole("ADMIN");

  const content = await prisma.siteContent.findMany({
    orderBy: {
      key: "asc",
    },
  });

  return (
    <main>
      <h1>Site Content</h1>

      <p>Manage the content used throughout the Zion website.</p>

      <Link href="/admin/content/new">Add Content</Link>

      <section>
        {content.length === 0 ? (
          <p>No content has been created yet.</p>
        ) : (
          content.map((item) => (
            <div key={item.id}>
              <h2>{item.key}</h2>
              <pre>{JSON.stringify(item.value, null, 2)}</pre>

              <Link href={`/admin/content/${item.id}`}>Edit</Link>
            </div>
          ))
        )}
      </section>
    </main>
  );
}
