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

  const isLoggedIn = status === "authenticated";
  const isAdmin = session?.user?.role === "ADMIN";
  const userInitial = session?.user?.name?.trim()?.charAt(0)?.toUpperCase();

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/ministries", label: "MINISTRIES" },
    { href: "/events", label: "EVENTS" },
    { href: "/sermons", label: "SERMONS" },
    { href: "/camp", label: "CAMP" },
  ];

  /*
   * CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
   */
  useEffect(() => {
    function handleClickOutside(event) {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }

      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /*
   * CLOSE ALL MENUS
   */
  function closeMenus() {
    setMenuOpen(false);
    setMoreOpen(false);
    setProfileOpen(false);
  }

  /*
   * LOGOUT
   */
  async function handleLogout() {
    closeMenus();

    await signOut({
      callbackUrl: "/",
    });
  }

  return (
    <header className={transparent ? styles.headerOverlay : styles.headerSolid}>
      <nav className={styles.nav}>
        {/* =========================
            LOGO
        ========================= */}

        <Link href="/" onClick={closeMenus}>
          <Image
            src="/ZionLogo1-removebg-preview.png"
            alt="Zion"
            width={150}
            height={60}
            priority
          />
        </Link>

        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}

        <button
          type="button"
          className={styles.hamburgerbtn}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* =========================
            MAIN NAVIGATION
        ========================= */}

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

            {/* =========================
                MORE DROPDOWN
            ========================= */}

            <li className={styles.moreitem} ref={moreRef}>
              <button
                type="button"
                className={styles.morebtn}
                onClick={() => setMoreOpen((prev) => !prev)}
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
                  <span>Gallery</span>
                </Link>

                <Link href="/give" onClick={closeMenus}>
                  <i className="fa-solid fa-hand-holding-heart"></i>
                  <span>Give</span>
                </Link>

                <Link href="/prayer-request" onClick={closeMenus}>
                  <i className="fa-solid fa-hands-praying"></i>
                  <span>Prayer Request</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>

        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className={styles.lastnavitems}>
          {/* CAMP BUTTON */}

          <Link href="/camp" onClick={closeMenus}>
            <button type="button" className={styles.campbookbtn}>
              Camp
            </button>
          </Link>

          {/* =========================
              PROFILE AREA
          ========================= */}

          <div
            className={styles.profilewrapper}
            ref={profileRef}
            onMouseEnter={() => setProfileOpen(true)}
            onMouseLeave={() => setProfileOpen(false)}
          >
            {/* PROFILE BUTTON */}

            <button
              type="button"
              className={styles.profilebubble}
              onClick={() => setProfileOpen((prev) => !prev)}
              aria-label="Open profile menu"
              aria-expanded={profileOpen}
            >
              {isLoggedIn ? (
                <span className={styles.profileinitial}>{userInitial}</span>
              ) : (
                <Image
                  src="/userprofile.png"
                  alt="Profile"
                  width={70}
                  height={70}
                />
              )}
            </button>

            {/* =========================
                PROFILE DROPDOWN
            ========================= */}

            <div
              className={`${styles.profiledropdown} ${
                profileOpen ? styles.profiledropdownOpen : ""
              }`}
            >
              {/* =========================
                  LOGGED IN
              ========================= */}

              {isLoggedIn ? (
                <>
                  {/* USER HEADER */}

                  <div className={styles.profileheader}>
                    <div className={styles.profileheaderimage}>
                      <span className={styles.profileheaderinitial}>
                        {userInitial}
                      </span>
                    </div>

                    <div className={styles.profileuserinfo}>
                      <strong>{session?.user?.name || "Zion Member"}</strong>

                      <span>{session?.user?.email}</span>
                    </div>
                  </div>

                  <div className={styles.profiledivider}></div>

                  {/* PROFILE */}

                  <Link href="/profile" onClick={closeMenus}>
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
                /* =========================
                   LOGGED OUT
                ========================= */

                <>
                  {/* GUEST HEADER */}

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

                  {/* SIGN IN */}

                  <Link href="/login" onClick={closeMenus}>
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <span>Sign In</span>
                  </Link>

                  {/* CREATE ACCOUNT */}

                  <Link href="/signup" onClick={closeMenus}>
                    <i className="fa-solid fa-user-plus"></i>
                    <span>Create Account</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* =========================
          UPCOMING EVENT BAR
      ========================= */}

      <div className={styles.upcomingeventtag}>
        <p>August 20th - Upcoming Convention</p>
      </div>
    </header>
  );
}
