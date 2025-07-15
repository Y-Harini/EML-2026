// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load fonts with variables
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// Metadata for SEO and browser tab
export const metadata: Metadata = {
  title: "EML IITH",
  description:
    "Extra Mural Lectures (EML) of IIT Hyderabad brings together visionary leaders, pioneers, and changemakers to inspire the student community through thought-provoking talks and personal journeys.",
  icons: {
    icon: "/eml1.png",
  },
};

// Root layout for the entire app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
