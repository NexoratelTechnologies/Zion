import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import RecentSermon from "@/components/RecentSermon";
import Footer from "@/components/Footer";

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
          <span className={styles.aboutuswatermark}>FAITH</span>
          <div className={styles.aboutusgrid}>
            <div className={styles.aboutuslabel}>
              <span className={styles.aboutuseyebrow}>who we are</span>
              <h2>About Us</h2>
            </div>
            <p className={styles.aboutustext}>
              <span className={styles.aboutusdropcap}>W</span>e are a{" "}
              <span className={styles.aboutushighlight}>
                Christ-centered church
              </span>{" "}
              committed to creating a place where people can encounter God, grow
              in their faith, and discover their purpose. We believe church is
              more than a place of worship. It is a community where people can
              find encouragement, build meaningful relationships, and grow
              together. Through worship, prayer, biblical teaching, fellowship,
              and service, we seek to help individuals develop a deeper
              relationship with God and live out their faith in their everyday
              lives. We welcome people from all walks of life and strive to
              create an environment where everyone feels valued, accepted, and
              encouraged to grow.
            </p>
          </div>
        </section>

        <section className={styles.missonsection}>
          <span className={styles.missonwatermark}>28:19</span>
          <div className={styles.missongrid}>
            <div className={styles.missonintro}>
              <span className={styles.missoneyebrow}>our mission</span>
              <h2>Mission Statement</h2>
              <p className={styles.missonlede}>
                Everything we do points back to one command — go, make, baptize,
                teach.
              </p>
              <Link href="/about" className={styles.readmoremisson}>
                Read More <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

            <div className={styles.missonbox}>
              <span className={styles.missonquote}>&ldquo;</span>
              <h3>Matthew 28:19 (ESV)</h3>
              <p>
                Go therefore and make disciples of all nations, baptizing them
                in the name of the Father and of the Son and of the Holy Spirit.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.visionsec}>
          <span className={styles.visioneyebrow}>what we stand on</span>
          <h2>Vision Values</h2>

          <div className={styles.visvaldiv}>
            <div className={styles.valuecard}>
              <h3 className={styles.valuecardword}>Faith</h3>
              <p className={styles.valuecardsub}>Zion</p>
              <Link href="/about" className={styles.learnmorebtnvisval}>
                Learn more <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

            <div className={styles.valuecard}>
              <h3 className={styles.valuecardword}>Hope</h3>
              <p className={styles.valuecardsub}>Zion</p>
              <Link href="/about" className={styles.learnmorebtnvisval}>
                Learn more <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

            <div className={styles.valuecard}>
              <h3 className={styles.valuecardword}>Love</h3>
              <p className={styles.valuecardsub}>Zion</p>
              <Link href="/about" className={styles.learnmorebtnvisval}>
                Learn more <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

            <div className={styles.valuecard}>
              <h3 className={styles.valuecardword}>Grace</h3>
              <p className={styles.valuecardsub}>Zion</p>
              <Link href="/about" className={styles.learnmorebtnvisval}>
                Learn more <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>
        {/* <section className={styles.lastaboutsection}>
          <div className={styles.lastsecfirsttext}>
            <h2>NPPD</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem vero veniam recusandae in illum nobis facilis tempora,
              nihil facere aspernatur pariatur assumenda ut officiis tempore
              laborum autem id quas obcaecati?
            </p>
          </div>
          <div className={styles.imageonlastaboutsec}>
            <Image
              src="/greyscalepastor1.jpg"
              alt=""
              fill
              className={styles.imageitselflast}
            />
          </div>
        </section> */}
      </main>
      <RecentSermon />
      <Footer />
    </>
  );
}
