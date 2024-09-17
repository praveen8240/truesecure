"use client";
import { useState } from "react";
import {
  Lock,
  Mail,
  User,
  ShieldCheck,
  Smartphone,
  Calendar,
} from "lucide-react";

export default function AuthPage({ isLogin, setIsLogin }) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iIzAwZmYwMDEwIj48L3JlY3Q+PC9zdmc+')] bg-repeat opacity-5"></div>
      </div>

      {/* Auth Container */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          {/* Toggle Buttons */}
          <div className="flex">
            <button
              className={`flex-1 py-4 text-center transition-colors ${
                isLogin
                  ? "bg-green-500 text-black"
                  : "bg-gray-800 text-green-500"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`flex-1 py-4 text-center transition-colors ${
                !isLogin
                  ? "bg-green-500 text-black"
                  : "bg-gray-800 text-green-500"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          {/* Sliding Forms Container */}
          <div
            className={`relative ${
              isLogin ? "h-[400px]" : "h-[650px]"
            } transition-all duration-300`}
          >
            <div
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out ${
                isLogin ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Login Form */}
              <form className="p-8 space-y-6">
                <div className="flex justify-center mb-6">
                  <Lock className="w-16 h-16 text-green-500" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="login-email" className="text-green-500">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                    <input
                      id="login-email"
                      type="email"
                      className="pl-10 bg-gray-800 border-green-500 text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="login-password" className="text-green-500">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                    <input
                      id="login-password"
                      type="password"
                      className="pl-10 bg-gray-800 border-green-500 text-white"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-black">
                  Login
                </button>
              </form>
            </div>

            <div
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out ${
                !isLogin ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Sign Up Form */}
              <form className="p-8 space-y-4">
                <div className="flex justify-center mb-6">
                  <ShieldCheck className="w-16 h-16 text-green-500" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="signup-name" className="text-green-500">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                    <input
                      id="signup-name"
                      type="text"
                      className="pl-10 bg-gray-800 border-green-500 text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="signup-email" className="text-green-500">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                    <input
                      id="signup-email"
                      type="email"
                      className="pl-10 bg-gray-800 border-green-500 text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="signup-password" className="text-green-500">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                    <input
                      id="signup-password"
                      type="password"
                      className="pl-10 bg-gray-800 border-green-500 text-white"
                      placeholder="Create a password"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="signup-confirm-password"
                    className="text-green-500"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                    <input
                      id="signup-confirm-password"
                      type="password"
                      className="pl-10 bg-gray-800 border-green-500 text-white"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="signup-phone" className="text-green-500">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                    <input
                      id="signup-phone"
                      type="tel"
                      className="pl-10 bg-gray-800 border-green-500 text-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="signup-dob" className="text-green-500">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                    <input
                      id="signup-dob"
                      type="date"
                      className="pl-10 bg-gray-800 border-green-500 text-white"
                    />
                  </div>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-black mt-6">
                  Register
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">
                  By registering, you agree to our Terms of Service and Privacy
                  Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
