import { requireRole } from "../../../lib/auth-utils";
import { prisma } from "../../../lib/prisma";
import styles from "./page.module.css";

export default async function PrayerRequestsPage() {
  await requireRole("ADMIN");

  const requests = await prisma.prayerRequest.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: { name: true, email: true },
      },
    },
  });

  return (
    <main className={styles.requestspage}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>admin</span>
        <h1>Prayer Requests</h1>
        <p className={styles.total}>Total requests: {requests.length}</p>
      </div>

      {requests.length === 0 ? (
        <div className={styles.emptyState}>
          <i className="fa-solid fa-hands-praying"></i>
          <p>No prayer requests have been submitted yet.</p>
        </div>
      ) : (
        <div className={styles.requestlist}>
          {requests.map((req) => (
            <div key={req.id} className={styles.requestcard}>
              <div className={styles.requestcardtop}>
                <div className={styles.requesterinfo}>
                  <div className={styles.avatar}>
                    {req.name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h2>
                      {req.name}
                      {req.anonymous && (
                        <span className={styles.anonBadge}>Anonymous</span>
                      )}
                    </h2>
                    <p className={styles.email}>{req.user.email}</p>
                  </div>
                </div>

                <p className={styles.time}>
                  {new Date(req.createdAt).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              <div className={styles.metarow}>
                <span className={styles.metaitem}>
                  <i className="fa-solid fa-building"></i> {req.department}
                </span>
                <span className={styles.metaitem}>
                  <i className="fa-solid fa-location-dot"></i> {req.branch}
                </span>
              </div>

              <p className={styles.requesttext}>{req.request}</p>

              {req.note && (
                <p className={styles.notetext}>
                  <strong>Note:</strong> {req.note}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
