"use client";

import { useActionState } from "react";
import { createCamp } from "@/app/actions/camp";

const initialState = {
  error: null,
  success: false,
  message: null,
};

export default function CampForm() {
  const [state, formAction, isPending] = useActionState(
    createCamp,
    initialState,
  );

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="name">Camp Name</label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="August Prayer Camp"
          required
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>

        <textarea
          id="description"
          name="description"
          placeholder="Enter details about this camp"
          rows="4"
        />
      </div>

      <div>
        <label htmlFor="location">Location</label>

        <input
          id="location"
          name="location"
          type="text"
          placeholder="Prayer Camp Grounds"
        />
      </div>

      <div>
        <label htmlFor="capacity">Capacity</label>

        <input
          id="capacity"
          name="capacity"
          type="number"
          min="1"
          placeholder="100"
        />
      </div>

      <div>
        <label htmlFor="arrivalDate">Arrival Date</label>

        <input id="arrivalDate" name="arrivalDate" type="date" required />
      </div>

      <div>
        <label htmlFor="departureDate">Departure Date</label>

        <input id="departureDate" name="departureDate" type="date" required />
      </div>

      <div>
        <label htmlFor="status">Camp Status</label>

        <select id="status" name="status" defaultValue="OPEN">
          <option value="OPEN">Open</option>
          <option value="CLOSED">Closed</option>
        </select>
      </div>

      {state.error && <p>{state.error}</p>}

      {state.success && <p>{state.message || "Camp created successfully."}</p>}

      <button type="submit" disabled={isPending}>
        {isPending ? "Creating Camp..." : "Create Camp"}
      </button>
    </form>
  );
}
