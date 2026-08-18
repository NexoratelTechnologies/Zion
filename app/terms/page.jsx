import styles from "./page.module.css";

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>ZION WORD</p>
        <h1>Terms & Conditions</h1>
        <p>
          These terms explain the basic rules for using the Zion Word website
          and its services.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2>1. Using This Website</h2>
          <p>
            By accessing and using this website, you agree to use it responsibly
            and in accordance with these Terms & Conditions.
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. User Accounts</h2>
          <p>
            You are responsible for providing accurate information when creating
            an account. You are also responsible for keeping your account
            credentials secure.
          </p>
        </div>

        <div className={styles.section}>
          <h2>3. Prayer Camp Bookings</h2>
          <p>
            Submitting a prayer camp booking does not automatically guarantee a
            place at camp. Bookings may remain pending until they are reviewed
            and approved by an authorized church administrator.
          </p>
        </div>

        <div className={styles.section}>
          <h2>4. Booking Information</h2>
          <p>
            You agree to provide accurate information when submitting a booking,
            including your contact information and emergency contact details.
          </p>
        </div>

        <div className={styles.section}>
          <h2>5. Acceptable Use</h2>
          <p>
            You must not use this website to submit false information, interfere
            with the operation of the website, attempt to access unauthorized
            areas, or use the website for unlawful purposes.
          </p>
        </div>

        <div className={styles.section}>
          <h2>6. Website Content</h2>
          <p>
            The content displayed on this website is provided for church,
            informational, and community purposes. Information such as events,
            services, and prayer camp details may change.
          </p>
        </div>

        <div className={styles.section}>
          <h2>7. Changes to the Service</h2>
          <p>
            Zion Word may modify, suspend, or discontinue parts of the website
            or its services when necessary.
          </p>
        </div>

        <div className={styles.section}>
          <h2>8. Limitation of Liability</h2>
          <p>
            We make reasonable efforts to keep the website available and
            accurate, but we cannot guarantee that the website will always be
            available, error-free, or uninterrupted.
          </p>
        </div>

        <div className={styles.section}>
          <h2>9. Changes to These Terms</h2>
          <p>
            These Terms & Conditions may be updated from time to time. Updated
            terms will be published on this page.
          </p>
        </div>

        <div className={styles.section}>
          <h2>10. Contact</h2>
          <p>
            If you have questions about these terms, please contact Zion Word.
          </p>
          <p>
            Email: info@zionword.org
            <br />
            Phone: +233 57 567 3875
          </p>
        </div>
      </section>
    </main>
  );
}
