import { requireAuth } from "../../lib/auth-utils";
import { signOut } from "../../auth";
import styles from "./page.module.css";

export default async function Dashboard() {
  const session = await requireAuth();

  return (
    <main className={styles.dashboardpage}>
      <section className={styles.welcomecard}>
        <span className={styles.welcomeeyebrow}>welcome back</span>
        <h1>{session.user.name}</h1>
        <p className={styles.email}>{session.user.email}</p>
        <span className={styles.rolebadge}>{session.user.role}</span>
      </section>

      <section className={styles.infocard}>
        <h2>Your Zion Dashboard</h2>
        <p>
          This is your personal space. More features will appear here as we
          build the application.
        </p>
      </section>

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/login" });
        }}
        className={styles.logoutform}
      >
        <button type="submit" className={styles.logoutbtn}>
          Log Out
        </button>
      </form>
    </main>
  );
}
