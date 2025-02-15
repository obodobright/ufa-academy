import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutGallerySection } from "@/components/ui/aboutGallery";
import CoachingStaff from "@/components/ui/coachStaff";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutGallerySection />
      <CoachingStaff />
    </main>
  );
}
