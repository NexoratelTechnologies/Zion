"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { logout } from "@/app/actions/logout";
import styles from "./Navbar.module.css";

export default function Navbar({ transparent = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const moreRef = useRef(null);
  const profileRef = useRef(null);

  const pathname = usePathname();
  const { data: session, status } = useSession();

  useEffect(() => {
    function handleClickOutside(e) {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }

      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/ministries", label: "MINISTRIES" },
    { href: "/events", label: "EVENTS" },
    { href: "/sermons", label: "SERMONS" },
    { href: "/camp", label: "CAMP" },
  ];

  const isLoggedIn = status === "authenticated";

  return (
    <header className={transparent ? styles.headerOverlay : styles.headerSolid}>
      <nav className={styles.nav}>
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/ZionLogo1-removebg-preview.png"
            alt="Zion"
            width={150}
            height={60}
            priority
          />
        </Link>

        {/* HAMBURGER */}
        <button
          className={styles.hamburgerbtn}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* NAVIGATION */}
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

            {/* MORE */}
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
                  <i className="fa-solid fa-images"></i>
                  Gallery
                </Link>

                <Link
                  href="/give"
                  onClick={() => {
                    setMoreOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  <i className="fa-solid fa-hand-holding-heart"></i>
                  Give
                </Link>

                <Link
                  href="/prayer-request"
                  onClick={() => {
                    setMoreOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  <i className="fa-solid fa-hands-praying"></i>
                  Prayer Request
                </Link>
              </div>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.lastnavitems}>
          <Link href="/camp">
            <button className={styles.campbookbtn}>Camp</button>
          </Link>

          {/* PROFILE */}
          <div
            className={styles.profilewrapper}
            ref={profileRef}
            onMouseEnter={() => {
              if (window.innerWidth > 768) {
                setProfileOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 768) {
                setProfileOpen(false);
              }
            }}
          >
            {isLoggedIn ? (
              <>
                <button
                  type="button"
                  className={styles.profilebubble}
                  onClick={() => setProfileOpen(!profileOpen)}
                  aria-label="Open profile menu"
                >
                  <Image
                    src="/userprofile.png"
                    alt="Profile"
                    width={70}
                    height={70}
                  />
                </button>

                <div
                  className={`${styles.profiledropdown} ${
                    profileOpen ? styles.profiledropdownOpen : ""
                  }`}
                >
                  <div className={styles.profileheader}>
                    <div className={styles.profiledropdownicon}>
                      <Image
                        src="/userprofile.png"
                        alt="Profile"
                        width={45}
                        height={45}
                      />
                    </div>

                    <div>
                      <strong>{session?.user?.name || "Zion Member"}</strong>

                      <span>{session?.user?.email || ""}</span>
                    </div>
                  </div>

                  <div className={styles.profiledivider}></div>

                  <Link
                    href="/profile"
                    onClick={() => {
                      setProfileOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    <i className="fa-solid fa-user"></i>
                    My Profile
                  </Link>

                  <Link
                    href="/dashboard"
                    onClick={() => {
                      setProfileOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    <i className="fa-solid fa-table-columns"></i>
                    Dashboard
                  </Link>

                  <div className={styles.profiledivider}></div>

                  <form action={logout}>
                    <button type="submit" className={styles.logoutbutton}>
                      <i className="fa-solid fa-right-from-bracket"></i>
                      Log Out
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <Link href="/login" className={styles.profilebubble}>
                <Image
                  src="/userprofile.png"
                  alt="Profile"
                  width={70}
                  height={70}
                />
              </Link>
            )}
          </div>
        </div>
      </nav>

      <div className={styles.upcomingeventtag}>
        <p>August 20th - Upcoming Convention</p>
      </div>
    </header>
  );
}
