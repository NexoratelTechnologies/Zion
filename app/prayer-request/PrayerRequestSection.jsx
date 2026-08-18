"use client";

import { useState } from "react";
import Link from "next/link";
import PrayerRequestModal from "./PrayerRequestModal";
import styles from "./page.module.css";

export default function PrayerRequestSection({ isLoggedIn, user }) {
  const [modalOpen, setModalOpen] = useState(false);

  if (!isLoggedIn) {
    return (
      <Link
        href="/login?callbackUrl=/prayer"
        className={styles.ctaBtn}
      >
        Make a Prayer Request
      </Link>
    );
  }

  return (
    <>
      <button
        type="button"
        className={styles.ctaBtn}
        onClick={() => setModalOpen(true)}
      >
        Make a Prayer Request
      </button>

      {modalOpen && (
        <PrayerRequestModal
          user={user}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
