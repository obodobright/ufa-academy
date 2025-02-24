import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutGallerySection } from "@/components/ui/aboutGallery";
import CoachingStaff from "@/components/ui/coachStaff";
import { PlayerComponent } from "@/components/ui/playersGallery";
import { MatchesComponent } from "@/components/ui/matches";
import { FixturesTable } from "@/components/ui/fixturesTable";
import { ViewTournament } from "@/components/ui/viewTournament";
import SwiperComponent from "@/components/swiper";
import { FooterComponent } from "@/components/ui/footer";
import { News } from "@/components/ui/news";
import { Partners } from "@/components/ui/partners";

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
      <PlayerComponent />
      <ViewTournament />
      {/* <SwiperComponent /> */}
      <News />
      <Partners />
      <FooterComponent />
    </main>
  );
}
