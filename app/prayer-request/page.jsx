import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrayerRequestSection from "./PrayerRequestSection";
import styles from "./page.module.css";

export default async function PrayerPage() {
  const session = await auth();

  return (
    <>
      <Navbar />
      <main className={styles.prayerpage}>
        <section className={styles.hero}>
          <div className={styles.heroTags}>
            <span>He Hears</span>
            <span>He Cares</span>
            <span>He Answers</span>
          </div>

          <h1 className={styles.heroTitle}>PRAYER REQUEST</h1>

          <p className={styles.heroText}>
            Whatever you&apos;re carrying, you don&apos;t have to carry it
            alone. Share it with us, and let our team stand with you in
            prayer.
          </p>

          <PrayerRequestSection
            isLoggedIn={!!session?.user}
            user={
              session?.user
                ? { name: session.user.name, email: session.user.email }
                : null
            }
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
