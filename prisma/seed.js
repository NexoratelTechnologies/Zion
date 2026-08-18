import "dotenv/config";
import { prisma } from "../lib/prisma.js";

async function main() {
  // ===== HOMEPAGE =====

  // Latest Sermon section
  await prisma.siteContent.upsert({
    where: { key: "home_featured_sermon" },
    update: {},
    create: {
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
  await prisma.siteContent.upsert({
    where: { key: "contact_phone" },
    update: {},
    create: {
      key: "contact_phone",
      value: { phone: "+233 57 567 3875" },
    },
  });

  // Upcoming Activities — Sunday/Wednesday Fun Days boxes
  await prisma.siteContent.upsert({
    where: { key: "home_fundays_boxes" },
    update: {},
    create: {
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
  await prisma.siteContent.upsert({
    where: { key: "home_prayer_camp_block" },
    update: {},
    create: {
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
  await prisma.siteContent.upsert({
    where: { key: "home_ministries_block" },
    update: {},
    create: {
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
  await prisma.siteContent.upsert({
    where: { key: "about_recent_sermon" },
    update: {},
    create: {
      key: "about_recent_sermon",
      value: {
        date: "12 AUG 26",
        title: "How to be One with the Word",
        youtubeLink: "https://youtube.com",
      },
    },
  });

  // ===== EVENTS PAGE =====

  await prisma.siteContent.upsert({
    where: { key: "events_upcoming_list" },
    update: {},
    create: {
      key: "events_upcoming_list",
      value: [
        {
          date: "03",
          month: "AUG",
          title: "Esther 3-7 | Who Is Your King?",
          time: "7:30 - 9:00 am",
          description:
            "A study through Esther unpacking what true kingship looks like when everything around us says otherwise.",
        },
        {
          date: "10",
          month: "AUG",
          title: "Esther 8 & 9 | Relief From Enemies",
          time: "8:00 - 10:20 am",
          description:
            "How God turns the tables — looking at deliverance, justice, and what relief really costs.",
        },
        {
          date: "17",
          month: "AUG",
          title: "Nehemiah 5 | Justice For The Poor",
          time: "9:30 - 11:00 am",
          description:
            "Nehemiah confronts injustice within his own community — a hard word on fairness and care for the vulnerable.",
        },
        {
          date: "24",
          month: "AUG",
          title: "Isaiah 61 | Lessons And Legacy",
          time: "9:00 - 10:30 am",
          description:
            "Closing out the series — good news for the broken, and what it means to carry that forward.",
        },
      ],
    },
  });
  

  console.log("Seed data created ✅");
}

main();
