"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar({ transparent = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={transparent ? styles.headerOverlay : styles.headerSolid}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            src="/ZionLogo1-removebg-preview.png"
            alt="Zion"
            width={150}
            height={60}
            priority
          />
        </Link>

        <button
          className={styles.hamburgerbtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div
          className={`${styles.middlenavlist} ${menuOpen ? styles.open : ""}`}
        >
          <ul>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                ABOUT
              </Link>
            </li>

            <li>
              <Link href="/ministries" onClick={() => setMenuOpen(false)}>
                MINISTRIES
              </Link>
            </li>

            <li>
              <Link href="/events" onClick={() => setMenuOpen(false)}>
                EVENTS
              </Link>
            </li>

            <li>
              <Link href="/sermons" onClick={() => setMenuOpen(false)}>
                SERMONS
              </Link>
            </li>

            <li>
              <Link href="/gallery" onClick={() => setMenuOpen(false)}>
                MORE
                <span className={styles.moremagglass}>
                  ... <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.lastnavitems}>
          <Link href="/prayer-camp">
            <button className={styles.campbookbtn}>Camp</button>
          </Link>

          <Link href="/login" className={styles.profilebubble}>
            <Image
              src="/userprofile.png"
              alt="Profile"
              width={70}
              height={70}
            />
          </Link>
        </div>
      </nav>

      <div className={styles.upcomingeventtag}>
        <p>August 20th - Upcoming Convention</p>
      </div>
    </header>
  );
}
