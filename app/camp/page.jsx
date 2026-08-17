import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Camp() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.firstcampsec}>
          <div className={styles.campimagediv}>
            <div className={styles.decorcircle1}></div>
            <div className={styles.decorcircle2}></div>
            <div className={styles.decorcircle3}></div>
            <Image
              src="/prayercamp1.jpg"
              alt=""
              fill
              className={styles.campimageitself}
            />
          </div>
          <div className={styles.rightsideofcampsec}>
            <h1>A SPIRITUAL RETREAT</h1>
            <h2>DRAW CLOSER TO GOD</h2>
            <p>Set apart a few days to seek His face</p>
            <p>
              Step away from the noise of everyday life and into a season of
              prayer, worship, and fellowship. Our Prayer Camp brings believers
              from every branch together for a few life-changing days —
              teaching, ministration, and time set apart to encounter God for
              yourself.
            </p>
            <Link href="/camp/book">
              <button>Camp Here</button>
            </Link>

            <div className={styles.twotagsoncap}>
              <p>All Branches Welcome</p>
              <p>Meals & Stay Included</p>
            </div>
          </div>
        </section>
        <section className={styles.whattoexpectsec}>
          <p className={styles.wtetag}>★ Prayer Camp</p>
          <h2 className={styles.wteheading}>
            A FEW DAYS SET APART TO SEEK GOD TOGETHER
          </h2>

          <div className={styles.wtewrapper}>
            <div className={styles.wteleftcol}>
              <Image
                src="/campimage3.jpg"
                alt=""
                fill
                className={styles.wteimage}
              />
              <div className={styles.wteoverlay}></div>
              <p className={styles.wtetext}>Daily Prayer Sessions</p>
            </div>

            <div className={styles.wtemiddlecol}>
              <div className={styles.wtebox}>
                <Image
                  src="/campnewpex1.jpg"
                  alt=""
                  fill
                  className={styles.wteimage}
                />
                <div className={styles.wteoverlay}></div>
                <p className={styles.wtetext}>
                  Powerful worship sessions morning and evening to draw closer
                  to God
                </p>
              </div>

              <div className={styles.wtebox}>
                <Image
                  src="/campimage2.jpg"
                  alt=""
                  fill
                  className={styles.wteimage}
                />
                <div className={styles.wteoverlay}></div>
                <p className={styles.wtetext}>Fellowship & Bonding</p>
              </div>
            </div>

            <div className={styles.wterightcol}>
              <div className={`${styles.wtebox} ${styles.wtetallbox}`}>
                <Image
                  src="/newcampimage2.jpg"
                  alt=""
                  fill
                  className={styles.wteimage}
                />
                <div className={styles.wteoverlay}></div>
                <p className={styles.wtetext}>
                  Comfortable accommodation and meals provided throughout your
                  stay
                </p>
              </div>

              <div className={`${styles.wtebox} ${styles.wtetallbox}`}>
                <Image
                  src="/newcampimage3.jpg"
                  alt=""
                  fill
                  className={styles.wteimage}
                />
                <div className={styles.wteoverlay}></div>
                <p className={styles.wtetext}>
                  One-on-one counselling and prayer ministration available on
                  request
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
