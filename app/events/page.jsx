import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const events = [
  {
    id: 1,
    month: "AUG",
    day: "20",
    title: "Upcoming Convention",
    time: "9:00 AM",
    location: "Main Auditorium",
    image: "/eventplaceholder1.jpg",
    blurb:
      "Join us for a weekend of worship, teaching, and fellowship as we come together as one body.",
  },
  {
    id: 2,
    month: "SEP",
    day: "05",
    title: "Youth Fellowship Night",
    time: "6:00 PM",
    location: "Youth Hall",
    image: "/eventplaceholder2.jpg",
    blurb:
      "A night dedicated to our young people — games, worship, and an honest word for the next generation.",
  },
  {
    id: 3,
    month: "SEP",
    day: "14",
    title: "Community Outreach",
    time: "10:00 AM",
    location: "Agona Swedru Town Center",
    image: "/eventplaceholder3.jpg",
    blurb:
      "We're taking the church to the streets — food, prayer, and practical help for our neighbors.",
  },
];

export default function Events() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <span className={styles.heroeyebrow}>whats coming up</span>
          <h1>Events</h1>
          <p>
            From citywide conventions to small gatherings, heres everything
            happening at Zion.
          </p>
        </section>

        <section className={styles.eventsgrid}>
          {events.map((event) => (
            <div key={event.id} className={styles.eventcard}>
              <div className={styles.eventimagewrap}>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className={styles.eventimage}
                />
                <div className={styles.datebadge}>
                  <span className={styles.datemonth}>{event.month}</span>
                  <span className={styles.dateday}>{event.day}</span>
                </div>
              </div>

              <div className={styles.eventbody}>
                <h3>{event.title}</h3>
                <div className={styles.eventmeta}>
                  <span>
                    <i className="fa-regular fa-clock"></i> {event.time}
                  </span>
                  <span>
                    <i className="fa-solid fa-location-dot"></i>{" "}
                    {event.location}
                  </span>
                </div>
                <p>{event.blurb}</p>
                <button className={styles.eventbtn}>Learn More</button>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}