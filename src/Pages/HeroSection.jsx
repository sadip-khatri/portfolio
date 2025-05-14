import { ArrowDown } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Sadip
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Khatri
            </span>
          </h1>
          <p className="text-lg md:xl text-muted-foreground max-2-2xl max-auto opacity-0 animate-fade-in-delay-3">
            I'm a frontend web developer specializing in crafting visually
            engaging and interactive user experiences. My portfolio highlights
            projects built with modern technologies like HTML, CSS, JavaScript,
            and React.
          </p>
        </div>

        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transfrom-translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}

export default HeroSection;
