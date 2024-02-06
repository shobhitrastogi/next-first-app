import Navbar from "@/components/Navbar";
import './globals.css'
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "travel-rastogi",
  description: "travel with rastogi ji",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer />
        </body>
    </html>
  );
}
