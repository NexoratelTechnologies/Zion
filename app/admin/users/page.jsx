import { requireRole } from "../../../lib/auth-utils";
import { prisma } from "../../../lib/prisma";
import RoleSelector from "./RoleSelector";
import styles from "./page.module.css";

export default async function UsersPage() {
  await requireRole("ADMIN");

  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className={styles.userspage}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>admin</span>
        <h1>Users</h1>
        <p className={styles.total}>Total users: {users.length}</p>
      </div>

      <div className={styles.userlist}>
        {users.map((user) => (
          <div key={user.id} className={styles.usercard}>
            <div className={styles.userinfo}>
              <h2>{user.name}</h2>
              <p className={styles.email}>{user.email}</p>
              <p className={styles.joined}>
                Joined {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className={styles.usercontrols}>
              <span className={styles.rolebadge} data-role={user.role}>
                {user.role}
              </span>
              <RoleSelector userId={user.id} currentRole={user.role} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
