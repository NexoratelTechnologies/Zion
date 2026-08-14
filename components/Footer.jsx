"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.firstpartoffooter}>
        <div>
          <Link href="/">
            <img src="/ZionLogo1-removebg-preview.png" alt="Zion" width="170" />
          </Link>
        </div>

        <div className={styles.newsletterdiv}>
          <p>Dont Miss a Beat</p>
          <form onSubmit={handleSubscribe} className={styles.newsletterdiv}>
            <input
              type="email"
              placeholder="Enter your email.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <p>
            {subscribed
              ? "Thanks for subscribing!"
              : "Subscribe to Zion Word to receive daily updates"}
          </p>
        </div>

        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/ministries">Ministries</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles.footerLinks}>
          <h3>Ministries</h3>
          <Link href="/ministries">Youth Ministry</Link>
          <Link href="/ministries">Children Ministry</Link>
          <Link href="/ministries">Adult Ministry</Link>
          <Link href="/ministries">Worship Ministry</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Kwabenya</p>
          <p>Accra</p>
          <p>1234 Okpa Street</p>
        </div>
      </div>

      <hr />

      <div className={styles.secondpartoffooter}>
        <div className={styles.iconsonsecondpartoffotter}>
          <a href="#" aria-label="Facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" aria-label="YouTube">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#" aria-label="TikTok">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="#" aria-label="X">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>

        <div className={styles.copyrightonfooter}>
          <p>&copy;Copyright. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
