import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noxus Studio Portfolio",
  description: "Discover the essence of Noxus. Where technology and creativity meet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex flex-col min-h-full font-sans">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow pt-[120px]">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
