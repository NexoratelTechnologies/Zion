import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/auth-utils";
import { updateBookingStatus } from "@/app/actions/bookingAdmin";
import styles from "./page.module.css";

export default async function AdminBookingsPage() {
  await requireRole("ADMIN");

  const [bookings, totalBookings, pendingBookings, approvedBookings] =
    await Promise.all([
      prisma.booking.findMany({
        include: {
          camp: true,
          user: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.booking.count(),

      prisma.booking.count({
        where: {
          status: "PENDING",
        },
      }),

      prisma.booking.count({
        where: {
          status: "APPROVED",
        },
      }),
    ]);

  return (
    <main className={styles.bookingsPage}>
      {/* =========================
          HEADER
      ========================= */}

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine}></span>
            PRAYER CAMP
          </div>

          <h1>
            Camp <span>Bookings.</span>
          </h1>

          <p>
            Review prayer camp registrations and manage booking requests from
            one place.
          </p>
        </div>

        <div className={styles.bookingBadge}>
          <div className={styles.bookingIcon}>
            <i className="fa-solid fa-calendar-check"></i>
          </div>

          <div>
            <span>BOOKING SYSTEM</span>
            <strong>Active</strong>
          </div>
        </div>
      </section>

      {/* =========================
          STATISTICS
      ========================= */}

      <section className={styles.statsGrid}>
        <div className={`${styles.statCard} ${styles.primaryStat}`}>
          <div className={styles.statTop}>
            <span>Total Bookings</span>

            <div className={styles.statIcon}>
              <i className="fa-solid fa-calendar-days"></i>
            </div>
          </div>

          <strong>{totalBookings}</strong>

          <p>All camp registrations</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statTop}>
            <span>Pending</span>

            <div className={styles.statIcon}>
              <i className="fa-solid fa-clock"></i>
            </div>
          </div>

          <strong>{pendingBookings}</strong>

          <p>Awaiting review</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statTop}>
            <span>Approved</span>

            <div className={styles.statIcon}>
              <i className="fa-solid fa-circle-check"></i>
            </div>
          </div>

          <strong>{approvedBookings}</strong>

          <p>Confirmed registrations</p>
        </div>
      </section>

      {/* =========================
          BOOKINGS PANEL
      ========================= */}

      <section className={styles.bookingsPanel}>
        <div className={styles.panelHeader}>
          <div>
            <span className={styles.panelEyebrow}>REGISTRATIONS</span>

            <h2>Camp Bookings</h2>

            <p>Review and manage people who have registered for camp.</p>
          </div>

          <div className={styles.bookingCount}>
            {bookings.length} {bookings.length === 1 ? "Booking" : "Bookings"}
          </div>
        </div>

        {bookings.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <i className="fa-solid fa-calendar-xmark"></i>
            </div>

            <h3>No bookings yet</h3>

            <p>
              Camp registrations will appear here when someone submits the
              booking form.
            </p>
          </div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.bookingTable}>
              <thead>
                <tr>
                  <th>Booking</th>
                  <th>Person</th>
                  <th>Camp</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Booked</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    {/* BOOKING */}

                    <td>
                      <div className={styles.bookingId}>
                        <span>ID</span>
                        <strong>{booking.bookingId}</strong>
                      </div>
                    </td>

                    {/* PERSON */}

                    <td>
                      <div className={styles.person}>
                        <div className={styles.avatar}>
                          {booking.fullName?.charAt(0)?.toUpperCase() || "Z"}
                        </div>

                        <div className={styles.personDetails}>
                          <strong>{booking.fullName}</strong>

                          <span>{booking.email}</span>

                          <small>{booking.phone}</small>
                        </div>
                      </div>
                    </td>

                    {/* CAMP */}

                    <td>
                      <div className={styles.campDetails}>
                        <strong>{booking.camp.name}</strong>

                        <span>
                          {new Date(
                            booking.camp.arrivalDate,
                          ).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                          })}{" "}
                          —{" "}
                          {new Date(
                            booking.camp.departureDate,
                          ).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                          })}
                        </span>
                      </div>
                    </td>

                    {/* ROLE */}

                    <td>
                      <span
                        className={
                          booking.user?.role === "ADMIN"
                            ? `${styles.roleBadge} ${styles.adminRole}`
                            : booking.user?.role === "USER"
                              ? `${styles.roleBadge} ${styles.userRole}`
                              : `${styles.roleBadge} ${styles.visitorRole}`
                        }
                      >
                        <i
                          className={
                            booking.user?.role === "ADMIN"
                              ? "fa-solid fa-shield-halved"
                              : booking.user?.role === "USER"
                                ? "fa-solid fa-user"
                                : "fa-solid fa-user-plus"
                          }
                        ></i>

                        {booking.user?.role || "VISITOR"}
                      </span>
                    </td>

                    {/* STATUS */}

                    <td>
                      <span
                        className={`${styles.statusBadge} ${
                          booking.status === "PENDING"
                            ? styles.pending
                            : booking.status === "APPROVED"
                              ? styles.approved
                              : styles.declined
                        }`}
                      >
                        <span className={styles.statusDot}></span>

                        {booking.status}
                      </span>
                    </td>

                    {/* DATE */}

                    <td>
                      <div className={styles.bookedDate}>
                        {new Date(booking.createdAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </div>
                    </td>

                    {/* ACTIONS */}

                    <td>
                      {booking.status === "PENDING" ? (
                        <div className={styles.actions}>
                          <form
                            action={async () => {
                              "use server";

                              await updateBookingStatus(booking.id, "APPROVED");
                            }}
                          >
                            <button
                              type="submit"
                              className={styles.approveButton}
                              title="Approve booking"
                            >
                              <i className="fa-solid fa-check"></i>
                            </button>
                          </form>

                          <form
                            action={async () => {
                              "use server";

                              await updateBookingStatus(booking.id, "DECLINED");
                            }}
                          >
                            <button
                              type="submit"
                              className={styles.declineButton}
                              title="Decline booking"
                            >
                              <i className="fa-solid fa-xmark"></i>
                            </button>
                          </form>
                        </div>
                      ) : (
                        <span className={styles.noAction}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
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
