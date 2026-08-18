import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const galleries = [
  { title: "Sunday Worship", count: 42, image: "/churchworship2.jpg" },
  { title: "Youth Camp", count: 34, image: "/campimage3.jpg" },
  { title: "Prayer Camp", count: 28, image: "/prayercamp1.jpg" },
  { title: "Baptisms", count: 19, image: "/churchhero3.avif" },
  { title: "Community Outreach", count: 25, image: "/communitymiimage1.jpg" },
  {
    title: "Children's Church",
    count: 31,
    image: "/youthandchildreamminimage1.jpg",
  },
  {
    title: "Choir & Worship Team",
    count: 22,
    image: "/churchworshipimage1.jpg",
  },
  { title: "Church Events", count: 47, image: "/newhompageeventphoto1.jpg" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className={styles.gallerypage}>
        <div className={styles.header}>
          <h1>A Look Back Through Our Gallery</h1>
          <p>
            Moments of worship, community, and growth — captured across every
            season of church life.
          </p>
        </div>

        <div className={styles.grid}>
          {galleries.map((gallery) => (
            <div key={gallery.title} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={gallery.image}
                  alt={gallery.title}
                  fill
                  className={styles.image}
                />
              </div>

              <h2>{gallery.title}</h2>
              <p>{gallery.count} Photos</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
