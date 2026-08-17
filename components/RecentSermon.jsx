import styles from "./RecentSermon.module.css";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function RecentSermon() {
  const recentSermonContent = await prisma.siteContent.findUnique({
    where: { key: "about_recent_sermon" },
  });

  const actualrecserValue = recentSermonContent.value;

  return (
    <section className={styles.overalldiveforcomp}>
      <div className={styles.headingfrorecentsermon}>
        {" "}
        <p>Pastors Sermon</p>{" "}
      </div>
      <div className={styles.recentdivinnerbox}>
        <p className={styles.sermondate}>{actualrecserValue.date}</p>
        <p className={styles.sermontitle}>{actualrecserValue.title}</p>
        <p className={styles.watconyoutube}>
          <Link href={actualrecserValue.youtubeLink}>
            <i className="fa-solid fa-play"></i>Wacth on Youtube
          </Link>
        </p>
      </div>
    </section>
  );
}
