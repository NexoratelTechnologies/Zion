import "./globals.css";

import {
  Poppins,
  Roboto_Condensed,
  Edu_NSW_ACT_Cursive,
  Playfair_Display,
  Anton,
  Oswald,
  Alex_Brush,
  Give_You_Glory,
} from "next/font/google";
import AuthProvider from "@/components/AuthProvider";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});
const giveYouGlory = Give_You_Glory({
  subsets: ["latin"],
  variable: "--font-give-you-glory",
  weight: ["400"],
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
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: ["400"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-alex-brush",
  weight: ["400"],
});

export const metadata = {
  title: "Zion",
  description: "Zion Church — Connect, Worship, Serve, and Grow.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export const viewport = {
  themeColor: "#3e2317",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${robotoCondensed.variable} ${eduCursive.variable} ${playfair.variable} ${anton.variable} ${oswald.variable} ${alexBrush.variable} ${giveYouGlory.variable}`}
      >
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />

        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
