import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

// Placeholder until this is wired to a real Camp record from the database
const campStartDate = "2026-08-20";
const campEndDate = "2026-08-24";

export default function Book() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.campbooksec}>
          <div className={styles.heading}>
            <p className={styles.headingtag}>Prayer Camp</p>
            <h1>BOOK YOUR SPOT</h1>
            <p className={styles.headingsub}>
              Fill in your details below to reserve your place at camp
            </p>
          </div>

          <form action="" className={styles.form}>
            <div className={styles.formsectiontitle}>
              <span className={styles.formsectionnum}>01</span>
              <p>Personal Information</p>
            </div>

            <div className={styles.formrow}>
              <div className={styles.formgroup}>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div className={styles.formrow}>
              <div className={styles.formgroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="e.g. 024 123 4567"
                  required
                />
              </div>

              <div className={styles.formgroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className={styles.formrow}>
              <div className={styles.formgroup}>
                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender" required defaultValue="">
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className={styles.formgroup}>
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" required />
              </div>
            </div>

            <div className={styles.formrow}>
              <div className={styles.formgroup}>
                <label htmlFor="emergencyContact">Emergency Contact</label>
                <input
                  type="tel"
                  id="emergencyContact"
                  name="emergencyContact"
                  placeholder="Name & phone number"
                  required
                />
              </div>
            </div>

            <div className={styles.formsectiontitle}>
              <span className={styles.formsectionnum}>02</span>
              <p>Camp Duration</p>
            </div>

            <div className={styles.campdatesbox}>
              <div className={styles.campdateitem}>
                <i className="fa-regular fa-calendar"></i>
                <div>
                  <p className={styles.campdatelabel}>Arrival</p>
                  <p className={styles.campdatevalue}>
                    {new Date(campStartDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className={styles.campdatedivider}></div>

              <div className={styles.campdateitem}>
                <i className="fa-regular fa-calendar"></i>
                <div>
                  <p className={styles.campdatelabel}>Departure</p>
                  <p className={styles.campdatevalue}>
                    {new Date(campEndDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.formsectiontitle}>
              <span className={styles.formsectionnum}>03</span>
              <p>Additional Information</p>
            </div>

            <div className={styles.formrow}>
              <div className={styles.formgroup}>
                <label htmlFor="prayerRequest">
                  Prayer Request <span>(optional)</span>
                </label>
                <textarea
                  id="prayerRequest"
                  name="prayerRequest"
                  rows={4}
                  placeholder="Share anything you'd like us to pray with you about"
                ></textarea>
              </div>
            </div>

            <div className={styles.formrow}>
              <div className={styles.formgroup}>
                <label htmlFor="notes">
                  Additional Notes <span>(optional)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Dietary needs, allergies, or anything else we should know"
                ></textarea>
              </div>
            </div>

            <button type="submit" className={styles.submitbtn}>
              Confirm Booking
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
