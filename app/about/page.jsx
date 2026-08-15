import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import RecentSermon from "@/components/RecentSermon";

import styles from "./page.module.css";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.fristpageofabout}>
          <div className={styles.openingtwotetsonabout}>
            <p>
              STR<span className={styles.desginerfontsonabout}>EA</span>MS OF J
              <span>O</span>Y
            </p>
            <p>
              WHAT <span className={styles.desginerfontsonabout}>GOD</span>{" "}
              CANNOT DO DOESNT EXIST
            </p>
          </div>
          <div className={styles.abouthero}>
            <Image
              src="/abouthero1.jpg"
              alt=""
              fill
              className={styles.aboutheroimage}
            />
          </div>
        </section>
        <section className={styles.aboutussec}>
          <h2>ABOUT US</h2>
          <p>
            We are a Christ-centered church committed to creating a place where
            people can encounter God, grow in their faith, and discover their
            purpose. We believe church is more than a place of worship. It is a
            community where people can find encouragement, build meaningful
            relationships, and grow together. Through worship, prayer, biblical
            teaching, fellowship, and service, we seek to help individuals
            develop a deeper relationship with God and live out their faith in
            their everyday lives. We welcome people from all walks of life and
            strive to create an environment where everyone feels valued,
            accepted, and encouraged to grow.
          </p>
        </section>
        <section className={styles.missonsection}>
          <h2>Mission Statement</h2>
          <div className={styles.missonbox}>
            <h3>Matthew 28:19 (ESV)</h3>
            <p>
              “Go therefore and make disciples of all nations, baptizing them in
              the name of the Father and of the Son and of the Holy Spirit.”
            </p>
          </div>
          <div className={styles.readmoremisson}>Read More</div>
        </section>
        <section className={styles.visionsec}>
          <h2>Vision Values</h2>
          <div className={styles.visvaldiv}>
            <div
              className={styles.valuecard}
              style={{ backgroundColor: "#e0115f" }}
            >
              <svg viewBox="0 0 300 300" className={styles.valuecardarc}>
                <path
                  id="arcpath1"
                  d="M 40,150 A 110,110 0 0 1 260,150"
                  fill="none"
                />
                <text className={styles.valuecardarctext}>
                  <textPath
                    href="#arcpath1"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    VISION VALUE
                  </textPath>
                </text>
              </svg>
              <h3 className={styles.valuecardword}>Faith</h3>
              <Link href="/about" className={styles.learnmorebtnvisval}>
                learn more <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

            <div
              className={styles.valuecard}
              style={{ backgroundColor: "#d21f1f" }}
            >
              <svg viewBox="0 0 300 300" className={styles.valuecardarc}>
                <path
                  id="arcpath2"
                  d="M 40,150 A 110,110 0 0 1 260,150"
                  fill="none"
                />
                <text className={styles.valuecardarctext}>
                  <textPath
                    href="#arcpath2"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    VISION VALUE
                  </textPath>
                </text>
              </svg>
              <h3 className={styles.valuecardword}>Hope</h3>
              <p className={styles.valuecardsub}>Zion</p>
              <Link href="/about" className={styles.learnmorebtnvisval}>
                learn more <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

            <div
              className={styles.valuecard}
              style={{ backgroundColor: "#1a3fc4" }}
            >
              <svg viewBox="0 0 300 300" className={styles.valuecardarc}>
                <path
                  id="arcpath3"
                  d="M 40,150 A 110,110 0 0 1 260,150"
                  fill="none"
                />
                <text className={styles.valuecardarctext}>
                  <textPath
                    href="#arcpath3"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    VISION VALUE
                  </textPath>
                </text>
              </svg>
              <h3 className={styles.valuecardword}>Love</h3>
              <p className={styles.valuecardsub}>Zion</p>
              <Link href="/about" className={styles.learnmorebtnvisval}>
                learn more <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

            <div
              className={styles.valuecard}
              style={{ backgroundColor: "#7a1fc4" }}
            >
              <svg viewBox="0 0 300 300" className={styles.valuecardarc}>
                <path
                  id="arcpath4"
                  d="M 40,150 A 110,110 0 0 1 260,150"
                  fill="none"
                />
                <text className={styles.valuecardarctext}>
                  <textPath
                    href="#arcpath4"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    VISION VALUE
                  </textPath>
                </text>
              </svg>
              <h3 className={styles.valuecardword}>Grace</h3>
              <p className={styles.valuecardsub}>Zion</p>
              <Link href="/about" className={styles.learnmorebtnvisval}>
                learn more <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className={styles.visvalcontrolsrow}>
            <div className={styles.visvalplaybtn}>
              <i className="fa-solid fa-play"></i>
            </div>
            <div className={styles.visvalscrollbar}>
              <div className={styles.visvalscrollbarfill}></div>
            </div>
          </div>
        </section>
        <section className={styles.lastaboutsection}>
          <div className={styles.lastsecfirsttext}>
            <h2>NPPD</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem vero veniam recusandae in illum nobis facilis tempora,
              nihil facere aspernatur pariatur assumenda ut officiis tempore
              laborum autem id quas obcaecati?
            </p>{" "}
          </div>
          <div className={styles.imageonlastaboutsec}>
            <Image
              src="/greyscalepastor1.jpg"
              alt=""
              fill
              className={styles.imageitselflast}
            />
          </div>
        </section>
      </main>
      <RecentSermon />
    </>
  );
}
