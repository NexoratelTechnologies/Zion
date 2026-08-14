import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroimage}>
          <Image
            src="/woodchurchhero.jpg"
            alt="Zion Church"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className={styles.herotexts}>
          <h2>WELCOME HOME</h2>
          <div className={styles.heroboxes}>
            <Link href="/sermons">
              <button>WATCH</button>
            </Link>
            <Link href="/ministries">
              <button>GROUPS</button>
            </Link>
            <Link href="/ministries">
              <button>SERVE</button>
            </Link>
            <Link href="/about">
              <button>NEW TO ZION</button>
            </Link>
            <Link href="#">
              <button>GIVE</button>
            </Link>
          </div>
          <div className={styles.herosocialicons}>
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#" aria-label="TikTok">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="#" aria-label="X">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <Navbar transparent />
      </section>

      <section className={styles.latestsermonsession}>
        <div className={styles.allrulesforLSS}>
          <div className={styles.ruleronLSS}></div>
          <div className={styles.ruleronLSS}></div>
          <div className={styles.ruleronLSS}></div>
        </div>
        <div className={styles.LSSheading}>Watch the Latest Sermon</div>
        <div className={styles.LSStopic}>
          Sermon : <span>Topic of Sermon</span>
        </div>
        <div className={styles.LSSspeaker}>
          Speaker: <span>Speaker of Sermon</span>
        </div>
        <Link href="/sermons" className={styles.sermonimagetovid}>
          <Image
            src="/pchirsteach2.jpg"
            alt="Latest sermon"
            width={680}
            height={420}
          />
          <div className={styles.playbutton}>
            <i className="fa-solid fa-play"></i>
          </div>
        </Link>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buttontowatchsermononutube}
        >
          Watch More on Youtube
        </a>
      </section>

      <section className={styles.welcomesection}>
        <div className={styles.firstwelctex}>Welcome to Zion House</div>
        <div className={styles.welcometextexpound}>
          Were one church with multiple congregations. Gathering across the city
          to love God, the church, the community, and the nations.
        </div>
        <Link href="/about" className={styles.aboutusbutton}>
          About Us
        </Link>

        <div className={styles.allservicetimes}>
          <div className={styles.firstservicetime}>
            <div className={styles.calendaricon}>
              <i className="fa-regular fa-calendar"></i>
            </div>
            <div className={styles.dayandactualtime}>
              <h2>Sundays</h2>
              <p>9:00 AM - 12:00 PM</p>
            </div>
          </div>
          <div className={styles.servicerulersepr}></div>
          <div className={styles.secondservicetime}>
            <div className={styles.calendaricon}>
              <i className="fa-regular fa-calendar"></i>
            </div>
            <div className={styles.dayandactualtime}>
              <h2>Sundays</h2>
              <p>2:00 AM - 3:00 PM</p>
            </div>
          </div>
          <div className={styles.servicerulersepr}></div>
          <div className={styles.thirdservicetime}>
            <div className={styles.calendaricon}>
              <i className="fa-regular fa-calendar"></i>
            </div>
            <div className={styles.dayandactualtime}>
              <h2>Wednesdays</h2>
              <p>7:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className={styles.designundertimesonwelc}></div>

        <Link href="/contact" className={styles.findabranhcbtninwelc}>
          Find a Branch &nbsp;&nbsp;
          <i className="fa-solid fa-chevron-right"></i>
        </Link>

        <div className={styles.getlostcallusdiv}>
          <div className={styles.leftsideoflostcalldiv}>
            <i className="fa-solid fa-phone-volume"></i>
            <div className={styles.twotextsocalllostdiv}>
              <p>Need Directions? Call</p>
              <a href="tel:+233575673875">+233 57 567 3875</a>
            </div>
          </div>
          <div className={styles.rightsideofcallusdiv}>
            <i className="fa-solid fa-phone"></i> Call for directions
          </div>
        </div>
      </section>

      <section className={styles.upcomingactivities}>
        <div className={styles.upcomheading}>Sunday, Wednesday, Fun Days</div>
        <div className={styles.upcomesubheading}>
          Dont Miss These thrillers , Youre not gonna like it
        </div>
        <div className={styles.firstsetofpptxtbgs}>
          <div className={styles.pptxtbg1}>
            <Image
              src="/papertexturebg1.avif"
              alt=""
              width={280}
              height={320}
            />
          </div>
          <div className={styles.pptxtbg1}>
            <Image
              src="/black-square-background1.avif"
              alt=""
              width={280}
              height={320}
            />
          </div>
          <div className={styles.pptxtbg1}>
            <Image
              src="/black-square-background1.avif"
              alt=""
              width={280}
              height={320}
            />
          </div>
        </div>
        <div className={styles.secondsetofpptxtbgs}>
          <div className={styles.pptxtbg2}>
            <Image src="/burgundybg1.jpg" alt="" width={380} height={320} />
          </div>
        </div>
      </section>
    </main>
  );
}
