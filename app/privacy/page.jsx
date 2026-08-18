import styles from "./page.module.css";

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>ZION WORD</p>
        <h1>Privacy Policy</h1>
        <p>
          We respect your privacy and are committed to protecting the
          information you share with us.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2>1. Information We Collect</h2>
          <p>
            When you create an account or book a prayer camp, we may collect
            information such as your name, email address, phone number, gender,
            date of birth, emergency contact information, prayer requests, and
            additional notes you choose to provide.
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information you provide to manage your account, process
            prayer camp bookings, communicate with you about your booking, and
            provide church-related services and information.
          </p>
        </div>

        <div className={styles.section}>
          <h2>3. Prayer Requests</h2>
          <p>
            Prayer requests and other information you voluntarily submit may be
            accessed by authorized church personnel for the purpose of providing
            prayer and pastoral support.
          </p>
        </div>

        <div className={styles.section}>
          <h2>4. Information Sharing</h2>
          <p>
            We do not sell your personal information. Your information is
            accessible only to authorized personnel who need it to operate the
            church website and manage church services.
          </p>
        </div>

        <div className={styles.section}>
          <h2>5. Data Security</h2>
          <p>
            We take reasonable measures to protect the information stored
            through our website. However, no method of storing or transmitting
            information over the internet can be guaranteed to be completely
            secure.
          </p>
        </div>

        <div className={styles.section}>
          <h2>6. Your Information</h2>
          <p>
            If you would like to request access to, correction of, or deletion
            of your personal information, please contact the church using the
            contact information provided on this website.
          </p>
        </div>

        <div className={styles.section}>
          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page.
          </p>
        </div>

        <div className={styles.section}>
          <h2>8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or how your
            information is handled, please contact Zion Word.
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
