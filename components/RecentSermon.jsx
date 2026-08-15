import styles from "./RecentSermon.module.css";

export default function RecentSermon() {
  return (
    <section className={styles.overalldiveforcomp}>
      <div className={styles.headingfrorecentsermon}>
        {" "}
        <p>Pastors Sermon</p>{" "}
      </div>
      <div className={styles.recentdivinnerbox}>
        <p className={styles.sermondate}>12 AUG, 26</p>
        <p className={styles.sermontitle}>How to be One with the Word</p>
        <p className={styles.watconyoutube}>
          <i className="fa-solid fa-play"></i>Wacth on Youtube
        </p>
      </div>
    </section>
  );
}
