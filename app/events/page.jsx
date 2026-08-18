import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import styles from "./page.module.css";

export default async function Events() {
  const eventsContent = await prisma.siteContent.findUnique({
    where: { key: "events_upcoming_list" },
  });

  const events = eventsContent?.value ?? [];
  const [featuredEvent, ...restEvents] = events;

  return (
    <>
      <Navbar />

      <main>
        <section className={styles.hero}>
          <Image
            src="/churchworship2.jpg"
            alt="Zion Chapel worship service"
            fill
            priority
            className={styles.heroImage}
          />
        </section>

        <section className={styles.upcomingBand}>
          <span className={styles.upcomingEyebrow}>whats coming up</span>
          <h1>Upcoming</h1>

          {featuredEvent && (
            <div className={styles.featuredRow}>
              <div className={styles.dateBox}>
                <span className={styles.dateNumber}>{featuredEvent.date}</span>
                <span className={styles.dateMonth}>{featuredEvent.month}</span>
              </div>

              <div className={styles.rowContent}>
                <h3>{featuredEvent.title}</h3>
                {featuredEvent.description && (
                  <p className={styles.rowDescription}>
                    {featuredEvent.description}
                  </p>
                )}
                <span className={styles.rowTime}>
                  <i className="fa-regular fa-clock"></i> {featuredEvent.time}
                </span>
              </div>
            </div>
          )}
        </section>

        <section className={styles.eventsList}>
          {restEvents.length === 0 && !featuredEvent ? (
            <div className={styles.emptyState}>
              No upcoming events right now — check back soon.
            </div>
          ) : (
            restEvents.map((event, index) => (
              <div key={index} className={styles.eventRow}>
                <div className={styles.dateBox}>
                  <span className={styles.dateNumber}>{event.date}</span>
                  <span className={styles.dateMonth}>{event.month}</span>
                </div>

                <div className={styles.rowContent}>
                  <h3>{event.title}</h3>
                  {event.description && (
                    <p className={styles.rowDescription}>{event.description}</p>
                  )}
                  <span className={styles.rowTime}>
                    <i className="fa-regular fa-clock"></i> {event.time}
                  </span>
                </div>
              </div>
            ))
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
