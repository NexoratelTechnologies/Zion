import { requireAuth } from "../../../lib/auth-utils";
import styles from "./page.module.css";

export default async function ProfilePage() {
  const session = await requireAuth();

  return (
    <main className={styles.profilepage}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>account overview</span>
        <h1>Profile</h1>
      </div>

      <div className={styles.detailscard}>
        <div className={styles.detailrow}>
          <span className={styles.detaillabel}>Name</span>
          <span className={styles.detailvalue}>{session.user.name}</span>
        </div>

        <div className={styles.detailrow}>
          <span className={styles.detaillabel}>Email</span>
          <span className={styles.detailvalue}>{session.user.email}</span>
        </div>

        <div className={styles.detailrow}>
          <span className={styles.detaillabel}>Role</span>
          <span className={styles.rolebadge}>{session.user.role}</span>
        </div>
      </div>
    </main>
  );
}
