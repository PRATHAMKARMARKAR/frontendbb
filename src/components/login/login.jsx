import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../../styles/Login.css";

// Placeholder social icons (replace with actual icons/images)
const GoogleIcon = () => <span className="googleimg" />;
const FacebookIcon = () => <span className="fbimg" />;
const StoreIcon = () => <span className="bimg" />;

// Reusable Social Button
const SocialButton = ({ icon, text }) => (
  <button className="flex items-center gap-4 w-full max-w-xs px-4 py-3 border border-[#28d3fa] bg-white text-[#FA8128] rounded-lg hover:shadow-md transition">
    {icon} {text}
  </button>
);

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => navigate("/register");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "https://baggagebugs-81tp.onrender.com/api/v1/user/login",
        { email, password }
      );

      if (response.data.success) {
        navigate("/landingpage", { state: { isLoggedIn: true } });
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during login.");
    }
  };

  return (
    <div className="h-screen w-full flex flex-col md:flex-row">
      
      {/* Left Section - Branding */}
      <div className="md:w-2/5 w-full h-[300px] md:h-full bg-[#FA8128] flex items-center justify-center relative">
        <div className="logoimg mb-4" />
        <div className="globeimg opacity-45 absolute bottom-0 right-0 w-32 h-32" />
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 flex items-center justify-center px-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white rounded-lg"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-3">
              <h1 className="text-[#FA8128] font-medium text-4xl">Hello,</h1>
              <h1 className="text-[#28d3fa] font-medium text-4xl">bagpacker</h1>
            </div>
            <div
              className="crossimg cursor-pointer"
              onClick={() => navigate("/landingpage")}
            />
          </div>

          <h2 className="text-[#63C5DA] text-2xl font-light mb-6">Login</h2>

          {/* Email Input */}
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 mb-4 border-2 border-[#63C5DA] rounded text-gray-600 placeholder-[#F8934A]/70 focus:outline-none focus:ring-2 focus:ring-[#F8934A]"
            required
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 mb-2 border-2 border-[#63C5DA] rounded text-gray-600 placeholder-[#F8934A]/70 focus:outline-none focus:ring-2 focus:ring-[#F8934A]"
            required
          />

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mb-2">{error}</p>
          )}

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <p className="text-[#63C5DA] underline text-sm cursor-pointer">
              Forgot password?
            </p>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-12 bg-[#FA8128] text-white rounded-3xl font-semibold hover:bg-[#f77a20] transition"
          >
            Login
          </button>

          {/* Register Prompt */}
          <div className="flex justify-center items-center gap-2 mt-3">
            <h2 className="text-[#63C5DA] font-light">No account?</h2>
            <button
              type="button"
              onClick={handleRegister}
              className="text-[#FA8128] underline font-light"
            >
              Register
            </button>
          </div>

          {/* Social Login */}
          <div className="mt-8 space-y-3">
            <SocialButton icon={<GoogleIcon />} text="Continue with Google" />
            <SocialButton icon={<FacebookIcon />} text="Continue with Facebook" />
            <SocialButton icon={<StoreIcon />} text="Store Baggage" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
