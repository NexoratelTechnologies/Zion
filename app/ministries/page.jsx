import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Ministries() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.firstsec}>
          <div className={styles.innertext}>
            <p>ZION HAS FOUR (4) MAIN MINISTRIES</p>
          </div>
          <div className={styles.boxesdiv}>
            <div className={`${styles.box1} ${styles.boxworship}`}>
              <i className="fa-solid fa-music"></i>
              <p>WORSHIP & ARTS</p>
            </div>
            <div className={`${styles.box1} ${styles.boxprayer}`}>
              <i className="fa-solid fa-hands-praying"></i>
              <p>PRAYER & DISCIPLESHIP</p>
            </div>
            <div className={`${styles.box1} ${styles.boxyouth}`}>
              <i className="fa-solid fa-child-reaching"></i>
              <p>YOUTH & CHILDRENS</p>
            </div>
            <div className={`${styles.box1} ${styles.boxevangelism}`}>
              <i className="fa-solid fa-earth-africa"></i>
              <p>EVANGELISM & COMMUNITY</p>
            </div>
          </div>
        </section>

        {/* WORSHIP & ARTS */}
        <section className={styles.displayedministry}>
          <span className={styles.ministryeyebrow}>ministry 01</span>
          <h2>WORSHIP & ARTS</h2>
          <div className={styles.actualminstrystuff}>
            <div className={styles.leftsideofministrystuff}>
              <p>
                We lead the church into God&apos;s presence through music,
                movement, and creativity. From Sunday worship to special
                productions, this ministry trains and releases artists who carry
                a spirit of excellence and freedom in everything they offer.
              </p>
              <div className={styles.departmentinminstry}>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>CHOIR</p>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>DANCE</p>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>MEDIA</p>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>INSTRUMENTS</p>
                <p className={styles.ruleoen}></p>
              </div>
              <div className={styles.joinmiistry}>
                <p>JOIN DEPARTMENT</p>
              </div>
            </div>
            <div className={styles.rightsideofministrystuff}>
              <Image
                src="/churchworship2.jpg"
                alt=""
                width={400}
                height={500}
                className={styles.ministryimage}
              />
            </div>
          </div>
        </section>

        {/* PRAYER & DISCIPLESHIP */}
        <section className={`${styles.displayedministry} ${styles.altbg}`}>
          <span className={styles.ministryeyebrow}>ministry 02</span>
          <h2>PRAYER & DISCIPLESHIP</h2>
          <div className={`${styles.actualminstrystuff} ${styles.reverseit}`}>
            <div className={styles.leftsideofministrystuff}>
              <p>
                We believe prayer is the foundation everything else is built on.
                This ministry covers our intercessors, Bible study groups, and
                mentorship tracks that help every member grow from a new
                believer into a mature disciple who can lead others.
              </p>
              <div className={styles.departmentinminstry}>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>INTERCESSORS</p>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>BIBLE STUDY</p>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>MENTORSHIP</p>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>PRAYER CHAIN</p>
                <p className={styles.ruleoen}></p>
              </div>
              <div className={styles.joinmiistry}>
                <p>JOIN DEPARTMENT</p>
              </div>
            </div>
            <div className={styles.rightsideofministrystuff}>
              <Image
                src="/prayerminiimage1.jpg"
                alt=""
                width={400}
                height={500}
                className={styles.ministryimage}
              />
            </div>
          </div>
        </section>

        {/* YOUTH & CHILDREN'S */}
        <section className={styles.displayedministry}>
          <span className={styles.ministryeyebrow}>ministry 03</span>
          <h2>YOUTH & CHILDREN&apos;S</h2>
          <div className={styles.actualminstrystuff}>
            <div className={styles.leftsideofministrystuff}>
              <p>
                From Sunday school classrooms to teen fellowship nights, this
                ministry exists to raise the next generation in the faith. We
                make room for kids and young people to encounter God in ways
                that fit their age and speak their language.
              </p>
              <div className={styles.departmentinminstry}>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>SUNDAY SCHOOL</p>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>TEENS</p>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>KIDS CHURCH</p>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>YOUTH CAMP</p>
                <p className={styles.ruleoen}></p>
              </div>
              <div className={styles.joinmiistry}>
                <p>JOIN DEPARTMENT</p>
              </div>
            </div>
            <div className={styles.rightsideofministrystuff}>
              <Image
                src="/youthandchildreamminimage1.jpg"
                alt=""
                width={400}
                height={500}
                className={styles.ministryimage}
              />
            </div>
          </div>
        </section>

        {/* EVANGELISM & COMMUNITY */}
        <section className={`${styles.displayedministry} ${styles.altbg}`}>
          <span className={styles.ministryeyebrow}>ministry 04</span>
          <h2>EVANGELISM & COMMUNITY</h2>
          <div className={`${styles.actualminstrystuff} ${styles.reverseit}`}>
            <div className={styles.leftsideofministrystuff}>
              <p>
                We take the church beyond our walls. This ministry runs our
                outreach programs, mission trips, and community service
                projects, and follows up with everyone who gives their life to
                Christ so no one is left to grow alone.
              </p>
              <div className={styles.departmentinminstry}>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>OUTREACH</p>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>MISSIONS</p>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>COMMUNITY CARE</p>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>FOLLOW-UP</p>
                <p className={styles.ruleoen}></p>
              </div>
              <div className={styles.joinmiistry}>
                <p>JOIN DEPARTMENT</p>
              </div>
            </div>
            <div className={styles.rightsideofministrystuff}>
              <Image
                src="/communitymiimage1.jpg"
                alt=""
                width={400}
                height={500}
                className={styles.ministryimage}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
