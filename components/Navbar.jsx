"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import styles from "./Navbar.module.css";

export default function Navbar({ transparent = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const moreRef = useRef(null);
  const profileRef = useRef(null);

  const pathname = usePathname();

  const { data: session, status } = useSession();

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/ministries", label: "MINISTRIES" },
    { href: "/events", label: "EVENTS" },
    { href: "/sermons", label: "SERMONS" },
    { href: "/camp", label: "CAMP" },
  ];

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

  function closeMenus() {
    setMenuOpen(false);
    setMoreOpen(false);
    setProfileOpen(false);
  }

  async function handleLogout() {
    setProfileOpen(false);
    setMenuOpen(false);

    await signOut({
      callbackUrl: "/",
    });
  }

  const isLoggedIn = status === "authenticated";
  const isAdmin = session?.user?.role === "ADMIN";

  return (
    <header className={transparent ? styles.headerOverlay : styles.headerSolid}>
      <nav className={styles.nav}>
        {/* LOGO */}
        <Link href="/" onClick={closeMenus}>
          <Image
            src="/ZionLogo1-removebg-preview.png"
            alt="Zion"
            width={150}
            height={60}
            priority
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className={styles.hamburgerbtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* MAIN NAVIGATION */}
        <div
          className={`${styles.middlenavlist} ${menuOpen ? styles.open : ""}`}
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenus}
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
                aria-expanded={moreOpen}
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
                <Link href="/gallery" onClick={closeMenus}>
                  <i className="fa-solid fa-images"></i>
                  Gallery
                </Link>

                <Link href="/give" onClick={closeMenus}>
                  <i className="fa-solid fa-hand-holding-heart"></i>
                  Give
                </Link>

                <Link href="/prayer-request" onClick={closeMenus}>
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
            {status === "loading" ? (
              <div className={styles.profilebubble}>
                <Image
                  src="/userprofile.png"
                  alt="Profile"
                  width={70}
                  height={70}
                />
              </div>
            ) : (
              <>
                <button
                  type="button"
                  className={styles.profilebubble}
                  onClick={() => setProfileOpen(!profileOpen)}
                  aria-label="Open profile menu"
                  aria-expanded={profileOpen}
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
                  {isLoggedIn ? (
                    <>
                      {/* USER INFORMATION */}
                      <div className={styles.profileheader}>
                        <div className={styles.profileheaderimage}>
                          <Image
                            src="/userprofile.png"
                            alt="Profile"
                            width={45}
                            height={45}
                          />
                        </div>

                        <div className={styles.profileuserinfo}>
                          <strong>
                            {session?.user?.name || "Zion Member"}
                          </strong>

                          <span>{session?.user?.email}</span>
                        </div>
                      </div>

                      <div className={styles.profiledivider}></div>

                      {/* PROFILE */}
                      <Link href="/dashboard/profile" onClick={closeMenus}>
                        <i className="fa-solid fa-user"></i>
                        <span>Profile</span>
                      </Link>

                      {/* DASHBOARD */}
                      <Link href="/dashboard" onClick={closeMenus}>
                        <i className="fa-solid fa-gauge-high"></i>
                        <span>Dashboard</span>
                      </Link>

                      {/* ADMIN DASHBOARD */}
                      {isAdmin && (
                        <Link href="/admin" onClick={closeMenus}>
                          <i className="fa-solid fa-shield-halved"></i>
                          <span>Admin Dashboard</span>
                        </Link>
                      )}

                      <div className={styles.profiledivider}></div>

                      {/* LOGOUT */}
                      <button
                        type="button"
                        className={styles.logoutbutton}
                        onClick={handleLogout}
                      >
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <span>Log Out</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <div className={styles.profileheader}>
                        <div className={styles.profileheaderimage}>
                          <Image
                            src="/userprofile.png"
                            alt="Profile"
                            width={45}
                            height={45}
                          />
                        </div>

                        <div className={styles.profileuserinfo}>
                          <strong>Welcome to Zion</strong>
                          <span>Sign in to your account</span>
                        </div>
                      </div>

                      <div className={styles.profiledivider}></div>

                      <Link href="/login" onClick={closeMenus}>
                        <i className="fa-solid fa-right-to-bracket"></i>
                        <span>Sign In</span>
                      </Link>

                      <Link href="/signup" onClick={closeMenus}>
                        <i className="fa-solid fa-user-plus"></i>
                        <span>Create Account</span>
                      </Link>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* UPCOMING EVENT BAR */}
      <div className={styles.upcomingeventtag}>
        <p>August 20th - Upcoming Convention</p>
      </div>
    </header>
  );
}
