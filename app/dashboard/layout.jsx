import Link from "next/link";
import styles from "./layout.module.css";

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <Link href="/dashboard">Zion Chapel</Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/profile">Profile</Link>
          {/*
            TODO: build these pages before re-enabling these links —
            they currently point nowhere.
            <Link href="/dashboard/sermons">Sermons</Link>
            <Link href="/dashboard/events">Events</Link>
            <Link href="/dashboard/prayer">Prayer</Link>
          */}
        </nav>

        <div className={styles.bottomNav}>
          <Link href="/">Back to Website</Link>
        </div>
      </aside>

      <main className={styles.content}>{children}</main>
    </div>
  );
}
