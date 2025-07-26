"use client"

import HeroSection from "./components/HeroSection";
import TooltipBubble from "./components/TooltipBubble";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";

import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

import DecSection from "./components/DecSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">


      <div className="container mt-24 mx-auto px-0 py-4">
        <HeroSection id="Hero" />

      </div>
      <div className="container mx-auto py-4">
        <DecSection />
      </div>
      <div className="container mx-auto px-12 py-4">
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />

        {/* <ChatBubbleOvalLeftIcon className="h-6 w-6" /> */}


      </div>

      <Footer />
    </main >
  );
}
