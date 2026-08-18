import { requireAuth } from "../../lib/auth-utils";
import { signOut } from "../../auth";
import { prisma } from "../../lib/prisma";
import styles from "./page.module.css";

export default async function Dashboard() {
  const session = await requireAuth();

  const booking = await prisma.booking.findFirst({
    where: {
      userId: session.user.id,
    },
    include: {
      camp: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

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

      <section className={styles.infocard}>
        <h2>Prayer Camp Booking</h2>

        {!booking ? (
          <p>You currently have no prayer camp booking.</p>
        ) : (
          <>
            <p>
              <strong>Booking ID:</strong> {booking.bookingId}
            </p>

            <p>
              <strong>Camp:</strong> {booking.camp.name}
            </p>

            <p>
              <strong>Arrival:</strong>{" "}
              {new Date(booking.camp.arrivalDate).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>

            <p>
              <strong>Departure:</strong>{" "}
              {new Date(booking.camp.departureDate).toLocaleDateString(
                "en-GB",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                },
              )}
            </p>

            <p>
              <strong>Status:</strong> {booking.status}
            </p>
          </>
        )}
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
