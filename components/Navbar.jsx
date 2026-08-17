"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar({ transparent = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(e) {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/ministries", label: "MINISTRIES" },
    { href: "/events", label: "EVENTS" },
    { href: "/sermons", label: "SERMONS" },
    { href: "/camp", label: "CAMP" },
  ];

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
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={pathname === link.href ? styles.activeLink : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className={styles.moreitem} ref={moreRef}>
              <button
                type="button"
                className={styles.morebtn}
                onClick={() => setMoreOpen(!moreOpen)}
              >
                MORE
                <span className={styles.moremagglass}>
                  <i
                    className={`fa-solid fa-chevron-down ${
                      moreOpen ? styles.chevronOpen : ""
                    }`}
                  ></i>
                </span>
              </button>

              <div
                className={`${styles.moredropdown} ${
                  moreOpen ? styles.moredropdownOpen : ""
                }`}
              >
                <Link
                  href="/gallery"
                  onClick={() => {
                    setMoreOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  <i className="fa-solid fa-images"></i> Gallery
                </Link>
                <Link
                  href="/give"
                  onClick={() => {
                    setMoreOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  <i className="fa-solid fa-hand-holding-heart"></i> Give
                </Link>
                <Link
                  href="/prayer-request"
                  onClick={() => {
                    setMoreOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  <i className="fa-solid fa-hands-praying"></i> Prayer Request
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.lastnavitems}>
          <Link href="/camp">
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
