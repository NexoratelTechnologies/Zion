import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CausesGrid from "./CausesGrid";
import styles from "./page.module.css";

const causes = [
  {
    id: "building-fund",
    title: "Building Fund",
    description:
      "Help us complete the new sanctuary so we can welcome even more people into God's house.",
    image: "/woodchurchhero.jpg",
    raisedAmount: 128500,
    goalAmount: 250000,
  },
  {
    id: "missions",
    title: "Missions & Outreach",
    description:
      "Support our teams taking the gospel to underserved communities across the region.",
    image: "/churchyouthunsplash1.avif",
    raisedAmount: 43200,
    goalAmount: 80000,
  },
  {
    id: "prayer-camp",
    title: "Prayer Camp Scholarships",
    description:
      "Sponsor a spot for a member who couldn't otherwise afford to attend Prayer Camp.",
    image: "/prayercamp1.jpg",
    raisedAmount: 15750,
    goalAmount: 30000,
  },
];

export default function Give() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroImageWrap}>
            <Image
              src="/churchworship2.jpg"
              alt=""
              fill
              className={styles.heroImage}
            />

            <div className={styles.heroCenter}>
              <span className={styles.heroEyebrow}>Zion Chapel</span>
              <h1 className={styles.heroTitle}>Give</h1>
            </div>
          </div>

          <Image
            src="/newchurchheroes1.jpg"
            alt=""
            width={130}
            height={130}
            className={`${styles.cornerImage} ${styles.cornerTopLeft}`}
          />
          <Image
            src="/newchurchheroes2.jpg"
            alt=""
            width={130}
            height={130}
            className={`${styles.cornerImage} ${styles.cornerTopRight}`}
          />
          <Image
            src="/newchurchheroes3.jpg"
            alt=""
            width={130}
            height={130}
            className={`${styles.cornerImage} ${styles.cornerBottomLeft}`}
          />
          <Image
            src="/pchirsteach2.jpg"
            alt=""
            width={130}
            height={130}
            className={`${styles.cornerImage} ${styles.cornerBottomRight}`}
          />
        </section>

        <section className={styles.statsRow}>
          <div className={styles.statItem}>
            <strong>GHS 187K+</strong>
            <span>Given This Year</span>
          </div>

          <div className={styles.statDivider}></div>

          <div className={styles.statItem}>
            <strong>3</strong>
            <span>Active Causes</span>
          </div>

          <div className={styles.statDivider}></div>

          <div className={styles.statItem}>
            <strong>420+</strong>
            <span>Cheerful Givers</span>
          </div>
        </section>

        <section className={styles.buildSection}>
          <div className={styles.buildLeft}>
            <span className={styles.eyebrow}>Why We Give</span>
            <h2>
              We&apos;re building more than a house — we&apos;re building a
              home.
            </h2>
          </div>

          <p className={styles.buildRight}>
            Every gift, big or small, goes toward growing the ministries and
            spaces that help our church family encounter God, grow in community,
            and reach the people around us. We believe giving is an act of
            worship — a cheerful, willing response to everything God has already
            given us. Whether youre supporting the building fund, missions, or
            a member in need, your generosity is making a real difference in
            real lives.
          </p>
        </section>

        <section className={styles.causesSection}>
          <div className={styles.causesHeader}>
            <span className={styles.eyebrow}>Give Toward</span>
            <h2>Current Causes</h2>
          </div>

          <CausesGrid causes={causes} />
        </section>
      </main>
      <Footer />
    </>
  );
}
