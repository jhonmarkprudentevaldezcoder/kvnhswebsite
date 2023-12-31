import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Navbar/Nav";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVNHS",
  description: "Generated by create next app",
  keywords: [
    "school",
    "education",
    "website",
    "students",
    "learning",
    "Deped",
    "ES-Rizal",
    "Wawa",
    "Rizal",
    "mark prudente valdez",
  ],
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
