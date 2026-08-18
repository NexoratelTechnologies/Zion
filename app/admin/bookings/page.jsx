import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/auth-utils";
import BookingActions from "./BookingActions";

export default async function AdminBookingsPage() {
  await requireRole("ADMIN");

  const bookings = await prisma.booking.findMany({
    include: {
      camp: true,
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main>
      <h1>Bookings</h1>

      <p>Total bookings: {bookings.length}</p>

      {bookings.length === 0 ? (
        <p>No bookings have been made yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Camp</th>
              <th>Role</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.bookingId}</td>

                <td>{booking.fullName}</td>

                <td>{booking.email}</td>

                <td>{booking.phone}</td>

                <td>{booking.camp.name}</td>

                <td>{booking.user?.role || "VISITOR"}</td>

                <td>{booking.status}</td>

                <td>
                  {new Date(booking.createdAt).toLocaleDateString("en-GB")}
                </td>

                <td>
                  <BookingActions
                    bookingId={booking.id}
                    status={booking.status}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
