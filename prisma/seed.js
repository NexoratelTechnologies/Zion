import "dotenv/config";
import { prisma } from "../lib/prisma.js";

async function main() {
  // ===== HOMEPAGE =====

  // Latest Sermon section
  await prisma.siteContent.create({
    data: {
      key: "home_featured_sermon",
      value: {
        topic: "Topic of Sermon",
        speaker: "Speaker of Sermon",
        thumbnail: "/pchirsteach2.jpg",
        youtubeLink: "https://youtube.com",
      },
    },
  });

  // Welcome section — "Need Directions" phone number
  await prisma.siteContent.create({
    data: {
      key: "contact_phone",
      value: { phone: "+233 57 567 3875" },
    },
  });

  // Upcoming Activities — Sunday/Wednesday Fun Days boxes
  await prisma.siteContent.create({
    data: {
      key: "home_fundays_boxes",
      value: [
        {
          text: "Pastors Appreciation Day on the 24th of August...",
          image: "/burgundybg1.jpg",
          link: "/events",
        },
        {
          text: "Choir Appreciation Day on the 24th of August...",
          image: "/black-square-background1.avif",
          link: "/events",
        },
      ],
    },
  });

  // Camp & Ministries — Prayer Camp block
  await prisma.siteContent.create({
    data: {
      key: "home_prayer_camp_block",
      value: {
        image: "/boygirlpiclc2.jpg",
        title: "Prayer Camp",
        subtext:
          "Youth camp featuring youth from all our church branches from 13th to 24th",
        buttonText: "Book Prayer Camp",
        buttonLink: "/prayer-camp",
      },
    },
  });

  // Camp & Ministries — Ministries block
  await prisma.siteContent.create({
    data: {
      key: "home_ministries_block",
      value: {
        image: "/churchyouthunsplash1.avif",
        title: "Ministries",
        subtext: "Find Your Place",
        adultLabel: "Adult",
        youthLabel: "Youth",
        childrenLabel: "Children",
        buttonText: "Ministries",
        buttonLink: "/ministries",
      },
    },
  });

  // ===== ABOUT PAGE =====

  // Floating RecentSermon component
  await prisma.siteContent.create({
    data: {
      key: "about_recent_sermon",
      value: {
        date: "12 AUG 26",
        title: "How to be One with the Word",
        youtubeLink: "https://youtube.com",
      },
    },
  });

  console.log("Seed data created ✅");
}

main();
