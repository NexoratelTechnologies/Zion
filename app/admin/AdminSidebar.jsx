"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./AdminSidebar.module.css";

const tabs = [
  { href: "/admin", label: "Dashboard", icon: "fa-solid fa-gauge-high" },
  { href: "/admin/users", label: "Users", icon: "fa-solid fa-users" },
  {
    href: "/admin/prayer-requests",
    label: "Prayer Requests",
    icon: "fa-solid fa-hands-praying",
  },
  {
    href: "/admin/content",
    label: "Content",
    icon: "fa-solid fa-pen-to-square",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <Link href="/admin" className={styles.brand}>
        <span className={styles.brandIcon}>
          <i className="fa-solid fa-shield-halved"></i>
        </span>
        <span>
          ZION <strong>ADMIN</strong>
        </span>
      </Link>

      <nav className={styles.navList}>
        <span className={styles.navLabel}>MENU</span>

        {tabs.map((tab) => {
          const isActive =
            tab.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`${styles.navItem} ${
                isActive ? styles.navItemActive : ""
              }`}
            >
              <i className={tab.icon}></i>
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </nav>

      <Link href="/" className={styles.exitLink}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        <span>Back to site</span>
      </Link>
    </aside>
  );
}
