"use client";

import { useActionState } from "react";
import { createCamp } from "@/app/actions/camp";

const initialState = {
  error: null,
  success: false,
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
        <label htmlFor="arrivalDate">Arrival Date</label>

        <input id="arrivalDate" name="arrivalDate" type="date" required />
      </div>

      <div>
        <label htmlFor="departureDate">Departure Date</label>

        <input id="departureDate" name="departureDate" type="date" required />
      </div>

      <div>
        <label htmlFor="isActive">Camp Status</label>

        <select id="isActive" name="isActive" defaultValue="true">
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </div>

      {state.error && <p>{state.error}</p>}

      {state.success && <p>Camp created successfully.</p>}

      <button type="submit" disabled={isPending}>
        {isPending ? "Creating Camp..." : "Create Camp"}
      </button>
    </form>
  );
}
