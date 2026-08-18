"use client";

import { useState, useActionState } from "react";
import styles from "./page.module.css";
import { createBooking } from "@/app/actions/booking";

const initialState = {
  success: false,
  error: null,
  bookingId: null,
};

export default function CampBookingForm({ camps }) {
  const [state, formAction, isPending] = useActionState(
    createBooking,
    initialState,
  );

  const [selectedCampId, setSelectedCampId] = useState("");

  const selectedCamp = camps.find((camp) => camp.id === selectedCampId);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (state.success) {
    return (
      <div className={styles.successmessage}>
        <div className={styles.successicon}>
          <i className="fa-solid fa-check"></i>
        </div>

        <h2>Booking Submitted Successfully!</h2>

        <p>
          Thank you for booking your place at prayer camp. Your booking is
          currently <strong>pending approval</strong>.
        </p>

        <div className={styles.bookingid}>
          <span>Booking ID</span>
          <strong>{state.bookingId}</strong>
        </div>

        <p>
          Please keep your booking ID for your records. You can use your
          dashboard to check your booking status if you have an account.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className={styles.form}>
      {state.error && (
        <div className={styles.formerror}>
          <i className="fa-solid fa-circle-exclamation"></i>
          <p>{state.error}</p>
        </div>
      )}

      {/* CAMP INFORMATION */}
      <div className={styles.formsectiontitle}>
        <span className={styles.formsectionnum}>01</span>
        <p>Camp Information</p>
      </div>

      <div className={styles.formrow}>
        <div className={styles.formgroup}>
          <label htmlFor="campId">Select Camp</label>

          <select
            id="campId"
            name="campId"
            required
            value={selectedCampId}
            onChange={(e) => setSelectedCampId(e.target.value)}
          >
            <option value="" disabled>
              Select a prayer camp
            </option>

            {camps.map((camp) => (
              <option key={camp.id} value={camp.id}>
                {camp.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* CAMP DATES */}
      {selectedCamp && (
        <div className={styles.campdatesbox}>
          <div className={styles.campdateitem}>
            <i className="fa-regular fa-calendar"></i>

            <div>
              <p className={styles.campdatelabel}>Arrival</p>

              <p className={styles.campdatevalue}>
                {formatDate(selectedCamp.arrivalDate)}
              </p>
            </div>
          </div>

          <div className={styles.campdatedivider}></div>

          <div className={styles.campdateitem}>
            <i className="fa-regular fa-calendar"></i>

            <div>
              <p className={styles.campdatelabel}>Departure</p>

              <p className={styles.campdatevalue}>
                {formatDate(selectedCamp.departureDate)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* PERSONAL INFORMATION */}
      <div className={styles.formsectiontitle}>
        <span className={styles.formsectionnum}>02</span>
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
          <label htmlFor="dateOfBirth">Date of Birth</label>

          <input type="date" id="dateOfBirth" name="dateOfBirth" required />
        </div>
      </div>

      <div className={styles.formrow}>
        <div className={styles.formgroup}>
          <label htmlFor="emergencyContact">Emergency Contact</label>

          <input
            type="text"
            id="emergencyContact"
            name="emergencyContact"
            placeholder="Name & phone number"
            required
          />
        </div>
      </div>

      {/* ADDITIONAL INFORMATION */}
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

      <button type="submit" className={styles.submitbtn} disabled={isPending}>
        {isPending ? "Submitting Booking..." : "Confirm Booking"}
      </button>
    </form>
  );
}
