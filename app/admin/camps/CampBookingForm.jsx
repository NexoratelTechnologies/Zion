"use client";

import { useState, useActionState } from "react";
import { createBooking } from "@/app/actions/camp";

const initialState = {
  success: false,
  error: null,
  bookingId: null,
};

export default function CampBookingForm({ camps }) {
  const [state, formAction, pending] = useActionState(
    createBooking,
    initialState,
  );

  const [selectedCampId, setSelectedCampId] = useState("");

  const selectedCamp = camps.find((camp) => camp.id === selectedCampId);

  if (state.success) {
    return (
      <div>
        <h2>Booking Successful!</h2>

        <p>Your camp booking has been submitted successfully.</p>

        <p>
          Your Booking ID is: <strong>{state.bookingId}</strong>
        </p>

        <p>Please keep this Booking ID for your records.</p>
      </div>
    );
  }

  return (
    <form action={formAction}>
      {state.error && <p>{state.error}</p>}

      {/* NAME */}
      <div>
        <label htmlFor="name">Full Name</label>

        <input id="name" name="name" type="text" required />
      </div>

      {/* EMAIL */}
      <div>
        <label htmlFor="email">Email</label>

        <input id="email" name="email" type="email" required />
      </div>

      {/* PHONE */}
      <div>
        <label htmlFor="phone">Phone Number</label>

        <input id="phone" name="phone" type="tel" required />
      </div>

      {/* CAMP */}
      <div>
        <label htmlFor="campId">Select Camp</label>

        <select
          id="campId"
          name="campId"
          value={selectedCampId}
          onChange={(e) => setSelectedCampId(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a camp
          </option>

          {camps.map((camp) => (
            <option key={camp.id} value={camp.id}>
              {camp.name}
            </option>
          ))}
        </select>
      </div>

      {/* CAMP INFORMATION */}
      {selectedCamp && (
        <div>
          <h3>{selectedCamp.name}</h3>

          {selectedCamp.description && <p>{selectedCamp.description}</p>}

          <p>
            Camp dates:{" "}
            {new Date(selectedCamp.arrivalDate).toLocaleDateString()} -{" "}
            {new Date(selectedCamp.departureDate).toLocaleDateString()}
          </p>
        </div>
      )}

      {/* ARRIVAL DATE */}
      <div>
        <label htmlFor="arrivalDate">Arrival Date</label>

        <input
          id="arrivalDate"
          name="arrivalDate"
          type="date"
          min={
            selectedCamp
              ? new Date(selectedCamp.arrivalDate).toISOString().split("T")[0]
              : undefined
          }
          max={
            selectedCamp
              ? new Date(selectedCamp.departureDate).toISOString().split("T")[0]
              : undefined
          }
          required
          disabled={!selectedCamp}
        />
      </div>

      {/* DEPARTURE DATE */}
      <div>
        <label htmlFor="departureDate">Departure Date</label>

        <input
          id="departureDate"
          name="departureDate"
          type="date"
          min={
            selectedCamp
              ? new Date(selectedCamp.arrivalDate).toISOString().split("T")[0]
              : undefined
          }
          max={
            selectedCamp
              ? new Date(selectedCamp.departureDate).toISOString().split("T")[0]
              : undefined
          }
          required
          disabled={!selectedCamp}
        />
      </div>

      {/* NUMBER OF PEOPLE */}
      <div>
        <label htmlFor="numberOfPeople">Number of People</label>

        <input
          id="numberOfPeople"
          name="numberOfPeople"
          type="number"
          min="1"
          defaultValue="1"
          required
        />
      </div>

      {/* NOTES */}
      <div>
        <label htmlFor="notes">Additional Information</label>

        <textarea id="notes" name="notes" rows="4" />
      </div>

      <button type="submit" disabled={pending || !selectedCamp}>
        {pending ? "Submitting..." : "Book Camp"}
      </button>
    </form>
  );
}
