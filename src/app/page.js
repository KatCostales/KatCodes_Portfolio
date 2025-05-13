"use client"

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Wave from "react-wavify";

// import { BrowserRouter, Route } from 'react-router-dom';


export default function Home() {
  return (
    // <BrowserRouter>

    <main className="flex min-h-screen flex-col bg-[#121212]">

      <Navbar />


      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>

      {/* Full-width Wave */}
      <Wave
        className="w-screen h-[150px]"
        mask="url(#mask)"
        fill="#76b6c4"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)" height={100}>
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="100%" height="400" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
      <div className="container mx-auto px-12 py-4">

        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>

      <Footer />
    </main>

    // </BrowserRouter>
  );
}
