import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Sermons() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className={styles.hero}>
          <div className={styles.imageonhero}>
            <Image
              src="/churchhero2.avif"
              alt=""
              fill
              className={styles.heroimage}
            />
            <div className={styles.herooverlay}></div>
            <div className={styles.herotexts}>
              <h1>ZION LIVE</h1>
              <p>
                Our Wednesday service—streamed live. Gather in homes,
                workplaces, open spaces or anywhere you are and watch together
                online.
              </p>
              <p>Watch Live</p>
            </div>
          </div>
        </section>
        <section className={styles.gathersection}>
          <div className={styles.gatherheader}>
            <span className={styles.gathereyebrow}>gather with us</span>
            <h2 className={styles.gathertitle}>Wherever You Are</h2>
            <p className={styles.gathersub}>
              Zion Live meets you where you already are—at home, at work, or out
              in the world. Press play and bring the people around you in.
            </p>
          </div>

          <div className={styles.gathergrid}>
            <div className={styles.gathercard}>
              <div className={styles.gathericonwrap}>
                <i className="fa-solid fa-house"></i>
              </div>
              <h3 className={styles.gathercardtitle}>In Your Home</h3>
              <p className={styles.gathercardtext}>
                Gather family, flatmates or friends and watch together.
              </p>
              <ul className={styles.gatherlist}>
                <li>Living rooms</li>
                <li>Family dinners</li>
                <li>Small groups at home</li>
              </ul>
            </div>

            <div className={styles.gathercard}>
              <div className={styles.gathericonwrap}>
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h3 className={styles.gathercardtitle}>At Work</h3>
              <p className={styles.gathercardtext}>
                Connect with colleagues for midweek worship.
              </p>
              <ul className={styles.gatherlist}>
                <li>Break rooms</li>
                <li>Lunch-hour watch parties</li>
                <li>After-work gatherings</li>
              </ul>
            </div>

            <div className={styles.gathercard}>
              <div className={styles.gathericonwrap}>
                <i className="fa-solid fa-sun"></i>
              </div>
              <h3 className={styles.gathercardtitle}>Open Spaces</h3>
              <p className={styles.gathercardtext}>
                Take the service anywhere the day takes you.
              </p>
              <ul className={styles.gatherlist}>
                <li>Parks & courtyards</li>
                <li>Cafés & porches</li>
                <li>Anywhere with a signal</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
