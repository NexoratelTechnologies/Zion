"use client";

import { useTransition } from "react";
import {
  approveBooking,
  declineBooking,
  deleteBooking,
} from "@/app/actions/booking";

export default function BookingActions({ bookingId, status }) {
  const [isPending, startTransition] = useTransition();

  const handleApprove = () => {
    startTransition(async () => {
      try {
        await approveBooking(bookingId);
      } catch (error) {
        console.error(error);
        alert("Failed to approve booking.");
      }
    });
  };

  const handleDecline = () => {
    startTransition(async () => {
      try {
        await declineBooking(bookingId);
      } catch (error) {
        console.error(error);
        alert("Failed to decline booking.");
      }
    });
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this booking?",
    );

    if (!confirmed) return;

    startTransition(async () => {
      try {
        await deleteBooking(bookingId);
      } catch (error) {
        console.error(error);
        alert("Failed to delete booking.");
      }
    });
  };

  return (
    <div>
      {status === "PENDING" && (
        <>
          <button type="button" onClick={handleApprove} disabled={isPending}>
            {isPending ? "..." : "Approve"}
          </button>

          <button type="button" onClick={handleDecline} disabled={isPending}>
            {isPending ? "..." : "Decline"}
          </button>
        </>
      )}

      <button type="button" onClick={handleDelete} disabled={isPending}>
        {isPending ? "..." : "Delete"}
      </button>
    </div>
  );
}
