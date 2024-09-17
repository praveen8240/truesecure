import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { ShieldCheck, Lock, Cpu, Code } from "lucide-react";

// Navbar Component
export const Navbar = ({ setIsLogin }) => (
  <header className="container mx-auto px-4 py-6">
    <nav className="flex flex-wrap items-center justify-between">
      <Link to="/" className="text-2xl font-bold text-green-500">
        TrueSecure
      </Link>
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        <div className="hidden sm:flex space-x-4">
          <Link
            to="#services"
            className="hover:text-green-400 transition-colors"
          >
            Services
          </Link>
          <Link to="#about" className="hover:text-green-400 transition-colors">
            About
          </Link>
          <Link
            to="#contact"
            className="hover:text-green-400 transition-colors"
          >
            Contact
          </Link>
        </div>
        <NavLink
          onClick={() => setIsLogin(true)}
          to="/auth"
          className="px-4 py-2 text-green-500 border border-green-500 rounded hover:bg-green-500 hover:text-black transition-colors"
        >
          Login
        </NavLink>
        <NavLink
          onClick={() => setIsLogin(!true)}
          to="/auth"
          className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600 transition-colors"
        >
          Sign Up
        </NavLink>
      </div>
    </nav>
  </header>
);

// Hero Component
export const Hero = () => (
  <main className="container mx-auto px-4 py-12 sm:py-20">
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Secure Your Digital Fortress
          <span className="block text-green-500">With True Secure</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-400">
          Advanced protection against cyber threats. Stay one step ahead of
          hackers.
        </p>
        <button className="px-8 py-3 bg-green-500 text-black text-lg rounded hover:bg-green-600 transition-colors">
          Get Protected Now
        </button>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80">
          <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
          <ShieldCheck className="w-full h-full text-green-500" />
        </div>
      </div>
    </div>
  </main>
);

// Features Component
export const Features = () => (
  <section className="container mx-auto px-4 py-12 sm:py-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="flex flex-col items-center text-center">
        <Lock className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-xl font-bold mb-2">Advanced Encryption</h3>
        <p className="text-gray-400">
          State-of-the-art encryption to protect your sensitive data.
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <Cpu className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-xl font-bold mb-2">AI-Powered Defense</h3>
        <p className="text-gray-400">
          Machine learning algorithms to detect and prevent threats.
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <Code className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-xl font-bold mb-2">Continuous Monitoring</h3>
        <p className="text-gray-400">
          24/7 surveillance of your systems for immediate threat response.
        </p>
      </div>
    </div>
  </section>
);

// CTA Component
export const CTA = () => (
  <section className="container mx-auto px-4 py-12 sm:py-20">
    <div className="bg-gray-900 rounded-lg p-8 sm:p-12 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Ready to Secure Your Digital Assets?
      </h2>
      <p className="text-xl text-gray-400 mb-8">
        Join thousands of satisfied customers who trust True Secure.
      </p>
      <button className="px-8 py-3 bg-green-500 text-black text-lg rounded hover:bg-green-600 transition-colors">
        Start Your Free Trial
      </button>
    </div>
  </section>
);

// Footer Component
export const Footer = () => (
  <footer className="container mx-auto px-4 py-8 mt-12">
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <p className="text-gray-400 mb-4 sm:mb-0">
        &copy; 2023 True Secure. All rights reserved.
      </p>
      <div className="flex space-x-4">
        <Link to="#" className="text-gray-400 hover:text-green-500">
          Privacy Policy
        </Link>
        <Link to="#" className="text-gray-400 hover:text-green-500">
          Terms of Service
        </Link>
      </div>
    </div>
  </footer>
);

// Main App Component
