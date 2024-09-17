import React from "react";
import { CTA, Features, Footer, Hero, Navbar } from "./Cyber";

const Landing = ({ setIsLogin }) => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iIzAwZmYwMDEwIj48L3JlY3Q+PC9zdmc+')] bg-repeat opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar setIsLogin={setIsLogin} />
        <Hero />
        <Features />
        <CTA />
        <Footer />
        {/* <AuthPage /> */}
      </div>
    </div>
  );
};

export default Landing;
