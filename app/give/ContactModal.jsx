"use client";

import styles from "./ContactModal.module.css";

const FINANCE_PHONE_DISPLAY = "053 676 9784";
const FINANCE_PHONE_TEL = "+233536769784";
const FINANCE_PHONE_WHATSAPP = "233536769784";

export default function ContactModal({ cause, onClose }) {
  const whatsappMessage = encodeURIComponent(
    `Hi, I'd like to give towards "${cause.title}" at Zion Chapel.`,
  );

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose} type="button">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <span className={styles.eyebrow}>giving to</span>
        <h2>{cause.title}</h2>

        <p className={styles.helperText}>
          To give towards this cause, please reach out to our finance team
          directly — they&apos;ll walk you through how to send your gift.
        </p>

        <div className={styles.contactActions}>
          <a
            href={`tel:${FINANCE_PHONE_TEL}`}
            className={`${styles.contactBtn} ${styles.callBtn}`}
          >
            <i className="fa-solid fa-phone"></i>
            Call {FINANCE_PHONE_DISPLAY}
          </a>

          <a
            href={`https://wa.me/${FINANCE_PHONE_WHATSAPP}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactBtn} ${styles.whatsappBtn}`}
          >
            <i className="fa-brands fa-whatsapp"></i>
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
