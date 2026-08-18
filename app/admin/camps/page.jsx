import { prisma } from "@/lib/prisma";
import CampBookingForm from "./CampBookingForm";

export default async function CampPage() {
  const camps = await prisma.camp.findMany({
    where: {
      active: true,
    },
    orderBy: {
      arrivalDate: "asc",
    },
  });

  return (
    <main>
      <h1>Prayer Camp</h1>

      <p>Book your place at one of our upcoming prayer camps.</p>

      <CampBookingForm camps={camps} />
    </main>
  );
}
