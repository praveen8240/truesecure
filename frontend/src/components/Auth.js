"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser, loginUser } from "../redux/authSlice";
import toast from "react-hot-toast";
import { Lock, Mail, User, ShieldCheck, Smartphone } from "lucide-react";
import {useNavigate} from 'react-router-dom'

export default function AuthPage({ isLogin, setIsLogin }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (isLogin) {
      setLoginData((prev) => ({ ...prev, [id]: value }));
    } else {
      setSignupData((prev) => ({ ...prev, [id]: value }));
    }
  };

  // Handle signup submit
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Attempting signup with data:', signupData);
      const result = await dispatch(signupUser(signupData)).unwrap();
      console.log('Signup result:', result);
      toast.success("Signup successful. You can now log in.");
      setIsLogin(true);
    } catch (err) {
      console.error('Signup error:', err);
      toast.error(err.message);
    }
  };

  // Handle login submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if(!loginData.email && !loginData.password)
      return toast.error("Fill Both Email and Password");
    try {
      await dispatch(loginUser(loginData)).unwrap();
      toast.success("Login successful!");
      return navigate('/dashboard')
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10">
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
                isLogin ? "bg-green-500 text-black" : "bg-gray-800 text-green-500"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`flex-1 py-4 text-center transition-colors ${
                !isLogin ? "bg-green-500 text-black" : "bg-gray-800 text-green-500"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          {/* Sliding Forms Container */}
          <div className={`relative ${isLogin ? "h-[400px]" : "h-[650px]"} transition-all duration-300`}>
            <div
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out ${
                isLogin ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Login Form */}
              <form className="p-6 sm:p-8 md:p-10 lg:p-12 space-y-6" onSubmit={handleLoginSubmit}>
                <div className="flex justify-center mb-6">
                  <Lock className="w-16 h-16 text-green-500" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-green-500">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                    <input
                      id="email"
                      type="email"
                      className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-800 border-green-500 text-white"
                      placeholder="Enter your email"
                      value={loginData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-green-500">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                    <input
                      id="password"
                      type="password"
                      className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-800 border-green-500 text-white"
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-black rounded-md py-2 mt-6">
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
              <form className="p-6 sm:p-8 md:p-10 lg:p-12 space-y-4" onSubmit={handleSignupSubmit}>
                <div className="flex justify-center mb-6">
                  <ShieldCheck className="w-16 h-16 text-green-500" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-green-500">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                    <input
                      id="name"
                      type="text"
                      className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-800 border-green-500 text-white"
                      placeholder="Enter your full name"
                      value={signupData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-green-500">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                    <input
                      id="email"
                      type="email"
                      className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-800 border-green-500 text-white"
                      placeholder="Enter your email"
                      value={signupData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-green-500">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                    <input
                      id="password"
                      type="password"
                      className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-800 border-green-500 text-white"
                      placeholder="Enter your password"
                      value={signupData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phonenumber" className="text-green-500">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                    <input
                      id="phonenumber"
                      type="tel"
                      className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-800 border-green-500 text-white"
                      placeholder="Enter your phone number"
                      value={signupData.phonenumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-black rounded-md py-2 mt-6">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
