import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/auth-utils";
import CampForm from "./CampForm";

export default async function AdminCampsPage() {
  await requireRole("ADMIN");

  const camps = await prisma.camp.findMany({
    orderBy: {
      arrivalDate: "asc",
    },
    include: {
      _count: {
        select: {
          bookings: true,
        },
      },
    },
  });

  return (
    <main>
      <h1>Manage Prayer Camps</h1>

      <p>Create and manage the prayer camps available for booking.</p>

      <section>
        <h2>Create Camp</h2>

        <CampForm />
      </section>

      <section>
        <h2>Existing Camps</h2>

        {camps.length === 0 ? (
          <p>No camps have been created yet.</p>
        ) : (
          <div>
            {camps.map((camp) => (
              <article key={camp.id}>
                <h3>{camp.name}</h3>

                {camp.description && <p>{camp.description}</p>}

                {camp.location && <p>Location: {camp.location}</p>}

                <p>
                  Arrival: {new Date(camp.arrivalDate).toLocaleDateString()}
                </p>

                <p>
                  Departure: {new Date(camp.departureDate).toLocaleDateString()}
                </p>

                <p>
                  Status: <strong>{camp.status}</strong>
                </p>

                <p>
                  Bookings: <strong>{camp._count.bookings}</strong>
                </p>

                {camp.capacity && (
                  <p>
                    Capacity: <strong>{camp.capacity}</strong>
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
