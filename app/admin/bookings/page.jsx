import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/auth-utils";
import { updateBookingStatus } from "@/app/actions/bookingAdmin";

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
    <main style={{ padding: "40px" }}>
      <h1>Camp Bookings</h1>

      <p style={{ marginBottom: "30px" }}>
        Total bookings: <strong>{bookings.length}</strong>
      </p>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th style={cellStyle}>Booking ID</th>
                <th style={cellStyle}>Name</th>
                <th style={cellStyle}>Email</th>
                <th style={cellStyle}>Phone</th>
                <th style={cellStyle}>Camp</th>
                <th style={cellStyle}>Role</th>
                <th style={cellStyle}>Status</th>
                <th style={cellStyle}>Date</th>
                <th style={cellStyle}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td style={cellStyle}>{booking.bookingId}</td>

                  <td style={cellStyle}>{booking.fullName}</td>

                  <td style={cellStyle}>{booking.email}</td>

                  <td style={cellStyle}>{booking.phone}</td>

                  <td style={cellStyle}>{booking.camp.name}</td>

                  <td style={cellStyle}>{booking.user?.role || "VISITOR"}</td>

                  <td style={cellStyle}>{booking.status}</td>

                  <td style={cellStyle}>
                    {new Date(booking.createdAt).toLocaleDateString("en-GB")}
                  </td>

                  <td style={cellStyle}>
                    {booking.status === "PENDING" && (
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          flexDirection: "column",
                        }}
                      >
                        <form
                          action={async () => {
                            "use server";

                            await updateBookingStatus(booking.id, "APPROVED");
                          }}
                        >
                          <button type="submit">Approve</button>
                        </form>

                        <form
                          action={async () => {
                            "use server";

                            await updateBookingStatus(booking.id, "DECLINED");
                          }}
                        >
                          <button type="submit">Decline</button>
                        </form>
                      </div>
                    )}

                    {booking.status !== "PENDING" && <span>No actions</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

const cellStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
  textAlign: "left",
};
