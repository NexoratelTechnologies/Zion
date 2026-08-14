import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  Poppins,
  Roboto_Condensed,
  Edu_NSW_ACT_Cursive,
  Playfair_Display,
} from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  weight: ["400", "500", "600", "700"],
});

const eduCursive = Edu_NSW_ACT_Cursive({
  subsets: ["latin"],
  variable: "--font-edu-cursive",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Zion",
  description: "Zion Church — a place to belong.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${robotoCondensed.variable} ${eduCursive.variable}`}
      >
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
