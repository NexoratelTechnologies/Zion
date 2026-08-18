import { requireRole } from "../../lib/auth-utils";
import { prisma } from "../../lib/prisma";
import Link from "next/link";
import styles from "./page.module.css";

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

  const firstName = session.user.name?.split(" ")[0] || "Admin";

  return (
    <main className={styles.adminPage}>
      {/* =========================
          HEADER
      ========================= */}

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine}></span>
            ZION ADMINISTRATION
          </div>

          <h1>
            Welcome back, <span>{firstName}.</span>
          </h1>

          <p>
            Manage your Zion community, monitor members, and keep the website up
            to date from one place.
          </p>
        </div>

        <div className={styles.adminBadge}>
          <div className={styles.adminIcon}>
            <i className="fa-solid fa-shield-halved"></i>
          </div>

          <div>
            <span>ACCOUNT STATUS</span>
            <strong>Administrator</strong>
          </div>
        </div>
      </section>

      {/* =========================
          STATISTICS
      ========================= */}

      <section className={styles.statsGrid}>
        <div className={`${styles.statCard} ${styles.primaryStat}`}>
          <div className={styles.statTop}>
            <span>Total Members</span>

            <div className={styles.statIcon}>
              <i className="fa-solid fa-users"></i>
            </div>
          </div>

          <strong>{totalUsers}</strong>

          <p>Registered Zion accounts</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statTop}>
            <span>Administrators</span>

            <div className={styles.statIcon}>
              <i className="fa-solid fa-shield-halved"></i>
            </div>
          </div>

          <strong>{totalAdmins}</strong>

          <p>Users with admin access</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statTop}>
            <span>Visitors</span>

            <div className={styles.statIcon}>
              <i className="fa-solid fa-user"></i>
            </div>
          </div>

          <strong>{totalVisitors}</strong>

          <p>Community member accounts</p>
        </div>
      </section>

      {/* =========================
          MAIN CONTENT
      ========================= */}

      <section className={styles.dashboardGrid}>
        {/* =========================
            RECENT USERS
        ========================= */}

        <section className={styles.usersPanel}>
          <div className={styles.panelHeader}>
            <div>
              <span className={styles.panelEyebrow}>COMMUNITY</span>

              <h2>Recent Members</h2>

              <p>The latest people to join the Zion community.</p>
            </div>

            <Link href="/admin/users" className={styles.viewAllButton}>
              View All
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className={styles.userList}>
            {recentUsers.length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>
                  <i className="fa-solid fa-users"></i>
                </div>

                <h3>No users yet</h3>

                <p>New members will appear here when they create an account.</p>
              </div>
            ) : (
              recentUsers.map((user) => (
                <div className={styles.userRow} key={user.id}>
                  <div className={styles.userIdentity}>
                    <div className={styles.avatar}>
                      {user.name?.charAt(0)?.toUpperCase() || "Z"}
                    </div>

                    <div className={styles.userDetails}>
                      <strong>{user.name || "Zion Member"}</strong>
                      <span>{user.email}</span>
                    </div>
                  </div>

                  <div className={styles.userRole}>
                    <span
                      className={
                        user.role === "ADMIN"
                          ? styles.adminRole
                          : styles.visitorRole
                      }
                    >
                      <i
                        className={
                          user.role === "ADMIN"
                            ? "fa-solid fa-shield-halved"
                            : "fa-solid fa-user"
                        }
                      ></i>

                      {user.role}
                    </span>
                  </div>

                  <div className={styles.joinedDate}>
                    <span>JOINED</span>

                    <strong>
                      {new Date(user.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </strong>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* =========================
            ADMIN TOOLS
        ========================= */}

        <aside className={styles.managementPanel}>
          <div className={styles.managementContent}>
            <div className={styles.managementIcon}>
              <i className="fa-solid fa-sliders"></i>
            </div>

            <span className={styles.panelEyebrow}>ADMIN TOOLS</span>

            <h2>Manage Zion</h2>

            <p>
              Manage members and update the content displayed across the Zion
              website.
            </p>

            <div className={styles.managementLinks}>
              <Link href="/admin/users" className={styles.managementButton}>
                <span>
                  <i className="fa-solid fa-users"></i>
                  Manage Users
                </span>

                <i className="fa-solid fa-arrow-right"></i>
              </Link>

              <Link href="/admin/content" className={styles.managementButton}>
                <span>
                  <i className="fa-solid fa-pen-to-square"></i>
                  Update Site Content
                </span>

                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link href="/admin/bookings" className={styles.managementButton}>
                <span>
                  <i className="fa-solid fa-calendar-check"></i>
                  Manage Bookings
                </span>

                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className={styles.managementFooter}>
            <i className="fa-solid fa-lock"></i>
            <span>Administrator access only</span>
          </div>
        </aside>
      </section>

      {/* =========================
          FOOTER MESSAGE
      ========================= */}

      <section className={styles.bottomMessage}>
        <span className={styles.bottomLine}></span>

        <p>
          <span>LOVE</span>
          <i className="fa-solid fa-circle"></i>
          <span>FAITH</span>
          <i className="fa-solid fa-circle"></i>
          <span>COMMUNITY</span>
          <i className="fa-solid fa-circle"></i>
          <span>SERVICE</span>
        </p>

        <span className={styles.bottomLine}></span>
      </section>
    </main>
  );
}
