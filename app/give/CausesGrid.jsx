"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";
import styles from "./page.module.css";

export default function CausesGrid({ causes }) {
  const [activeCause, setActiveCause] = useState(null);

  return (
    <>
      <div className={styles.causesGrid}>
        {causes.map((cause) => {
          const raised = cause.raisedAmount ?? 0;
          const goal = cause.goalAmount ?? 0;
          const percent =
            goal > 0 ? Math.min(100, Math.round((raised / goal) * 100)) : 0;

          return (
            <div key={cause.id} className={styles.causeCard}>
              <div className={styles.causeImageWrap}>
                <img
                  src={cause.image}
                  alt={cause.title}
                  className={styles.causeImage}
                />
              </div>

              <div className={styles.causeBody}>
                <h3>{cause.title}</h3>
                <p>{cause.description}</p>

                <div className={styles.causeAmount}>
                  <strong>GHS {raised.toLocaleString()}</strong>
                  <span> raised of GHS {goal.toLocaleString()}</span>
                </div>

                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>

                <button
                  className={styles.donateBtn}
                  onClick={() => setActiveCause(cause)}
                  type="button"
                >
                  Donate
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {activeCause && (
        <ContactModal
          cause={activeCause}
          onClose={() => setActiveCause(null)}
        />
      )}
    </>
  );
}
