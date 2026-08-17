import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

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
        <section className={styles.channelsec}>
          <div className={styles.channelbannerdiv}>
            <Image
              src="/zionbanner1.png"
              alt="Zion Chapel Banner"
              fill
              className={styles.channelbannerimage}
            />
          </div>

          <div className={styles.channelinfowrapper}>
            <div className={styles.channellogodiv}>
              <Image
                src="/ZionLogo1.webp"
                alt="Zion Chapel"
                width={90}
                height={90}
                className={styles.channellogo}
              />
            </div>

            <div className={styles.channeldetailsdiv}>
              <h2 className={styles.channelname}>Zion Chapel</h2>
              <p className={styles.channelmeta}>
                @ZionChapelOfficial &nbsp;·&nbsp; 4.2K subscribers &nbsp;·&nbsp;
                210 videos
              </p>
              <p className={styles.channeltagline}>
                Passionately Following Christ Together
              </p>
            </div>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.subscribebtnchannel}
            >
              Subscribe
            </a>
          </div>

          <p className={styles.channelnotice}>
            All recorded sermons are available on our YouTube channel, and our
            live services are streamed there too — subscribe so you never miss a
            session.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
