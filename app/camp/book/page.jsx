import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CampBookingForm from "./CampBookingForm";
import { prisma } from "@/lib/prisma";

export default async function Book() {
  const camps = await prisma.camp.findMany({
    where: {
      status: "OPEN",
    },
    orderBy: {
      arrivalDate: "asc",
    },
  });

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

          <CampBookingForm camps={camps} />
        </section>
      </main>

      <Footer />
    </>
  );
}
