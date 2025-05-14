import React from "react";
import ThemeToogle from "./ThemeToogle";
import { StarBackground } from "./StarBackground";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import SkillSection from "./SkillSection";
import ProjectsSection from "./ProjectsSection";
import { ContactSection } from "./ContactSection";
import Footer from "./Footer";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toogle */}
      <ThemeToogle />
      {/* Background Effects */}
      <StarBackground />
      {/*  Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutMe />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
