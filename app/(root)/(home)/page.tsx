import React from "react";

// import Landing from "@/components/Landing";
import Landing from "../../components/Landing";
import HeroSection from "./_components/HeroSection";
import Navbar from "@/app/components/Navbar";
import SecondSection from "./_components/SecondSection";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SecondSection />
    </div>
  );
};

export default Page;
