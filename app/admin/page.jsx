import { requireRole } from "../../lib/auth-utils";
import { prisma } from "../../lib/prisma";
import Link from "next/link";

export default async function AdminPage() {
  const session = await requireRole("ADMIN");

  const [totalUsers, totalAdmins, totalVisitors, recentUsers] =
    await Promise.all([
      prisma.user.count(),
      prisma.user.count({
        where: {
          role: "ADMIN",
        },
      }),
      prisma.user.count({
        where: {
          role: "VISITOR",
        },
      }),
      prisma.user.findMany({
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
      }),
    ]);

  return (
    <main>
      <h1>Admin Dashboard</h1>
      <p>Welcome back, {session.user.name}.</p>

      <section>
        <div>
          <h2>Total Users</h2>
          <p>{totalUsers}</p>
        </div>

        <div>
          <h2>Admins</h2>
          <p>{totalAdmins}</p>
        </div>

        <div>
          <h2>Visitors</h2>
          <p>{totalVisitors}</p>
        </div>
      </section>

      <section>
        <h2>Recent Users</h2>

        {recentUsers.length === 0 ? (
          <p>No users yet.</p>
        ) : (
          <div>
            {recentUsers.map((user) => (
              <div key={user.id}>
                <p>
                  <strong>{user.name}</strong>
                </p>

                <p>{user.email}</p>

                <p>Role: {user.role}</p>

                <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2>Management</h2>

        <Link href="/admin/users">Manage Users</Link>
      </section>
    </main>
  );
}
