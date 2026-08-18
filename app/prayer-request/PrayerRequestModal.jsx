"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { createPrayerRequest } from "../actions/prayer";
import styles from "./PrayerRequestModal.module.css";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={styles.submitBtn} disabled={pending}>
      {pending ? "Sending..." : "Send Prayer Request"}
    </button>
  );
}

export default function PrayerRequestModal({ user, onClose }) {
  const [state, formAction] = useActionState(createPrayerRequest, null);

  // auto-close a few seconds after a successful submission
  useEffect(() => {
    if (state?.success) {
      const timer = setTimeout(onClose, 2200);
      return () => clearTimeout(timer);
    }
  }, [state, onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} type="button">
          <i className="fa-solid fa-xmark"></i>
        </button>

        {state?.success ? (
          <div className={styles.successState}>
            <span className={styles.successIcon}>
              <i className="fa-solid fa-hands-praying"></i>
            </span>
            <h2>Request Received</h2>
            <p>
              Thank you for trusting us with this. Our team will be praying
              with you.
            </p>
          </div>
        ) : (
          <>
            <span className={styles.eyebrow}>Zion Chapel</span>
            <h2>Prayer Request</h2>
            <p className={styles.helperText}>
              Share what&apos;s on your heart. Our prayer team will hold this
              with care.
            </p>

            <form action={formAction} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={user?.name || ""}
                  required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="department">Department</label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    placeholder="e.g. Choir, Ushering"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="branch">Branch</label>
                  <input
                    type="text"
                    id="branch"
                    name="branch"
                    placeholder="e.g. Accra Main"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="request">Prayer Request</label>
                <textarea
                  id="request"
                  name="request"
                  rows={4}
                  placeholder="Tell us what you'd like us to pray with you about..."
                  required
                ></textarea>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="note">Note (optional)</label>
                <textarea
                  id="note"
                  name="note"
                  rows={2}
                  placeholder="Type 'anonymous' if you'd like this prayer request kept anonymous."
                ></textarea>
              </div>

              {state?.error && <p className={styles.errorMsg}>{state.error}</p>}

              <SubmitButton />
            </form>
          </>
        )}
      </div>
    </div>
  );
}
