import { prisma } from "@/lib/prisma";
import HomeClient from "@/components/HomeClient";

export default async function Home() {
  const [
    featuredSermon,
    phone,
    fundaysBoxes,
    prayerCampBlock,
    ministriesBlock,
  ] = await Promise.all([
    prisma.siteContent.findUnique({ where: { key: "home_featured_sermon" } }),
    prisma.siteContent.findUnique({ where: { key: "contact_phone" } }),
    prisma.siteContent.findUnique({ where: { key: "home_fundays_boxes" } }),
    prisma.siteContent.findUnique({ where: { key: "home_prayer_camp_block" } }),
    prisma.siteContent.findUnique({ where: { key: "home_ministries_block" } }),
  ]);

  return (
    <HomeClient
      sermon={featuredSermon.value}
      phone={phone.value}
      fundaysBoxes={fundaysBoxes.value}
      prayerCampBlock={prayerCampBlock.value}
      ministriesBlock={ministriesBlock.value}
    />
  );
}
