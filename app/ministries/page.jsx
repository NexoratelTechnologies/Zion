import styles from "./ministries.module.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

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
            <div className={styles.box1}>
              <p>WORSHIP & ARTS</p>
            </div>
            <div className={styles.box1}>
              <p>PRAYER & DISCIPLESHIP</p>
            </div>
            <div className={styles.box1}>
              <p>YOUTH & CHILDRENS</p>
            </div>
            <div className={styles.box1}>
              <p>EVANGELISM & COMMUNITY</p>
            </div>
          </div>
        </section>
        <section className={styles.displayedministry}>
          <h2>WORSHIP & ARTS</h2>
          <div className={styles.actualminstrystuff}>
            <div className={styles.leftsideofministrystuff}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                blanditiis. Molestiae est accusantium quia aut laudantium
                quaerat recusandae a! Eveniet aperiam necessitatibus eligendi
                minus, laudantium iusto labore quia atque! Est. Repudiandae
                fugit magni perferendis omnis, consectetur impedit ex vel harum!
                Mollitia dolor facere aspernatur eum dignissimos dolore maxime,
                voluptatem deleniti officia sed minus placeat cupiditate omnis
                saepe, animi nam asperiores.
              </p>
              <div className={styles.departmentinminstry}>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>CHOIR</p>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>CHOIR</p>
                <p className={styles.ruleoen}></p>
                <p className={styles.depone}>CHOIR</p>
                <p className={styles.ruleoen}></p>
              </div>
              <div className={styles.joinmiistry}>
                <p>JOIN DEPARTMENT</p>
              </div>
            </div>
            <div className="rightsideofministrystuff">
              <Image
                src="/churchworship2.jpg"
                alt=""
                width={400}
                height={500}
                className={styles.ministryimage}
              />{" "}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
