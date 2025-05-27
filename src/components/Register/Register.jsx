import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/Login.css"; // Reuse styles if applicable

// Placeholder social icons
const GoogleIcon = () => <span className="googleimg" />;
const FacebookIcon = () => <span className="fbimg" />;
const StoreIcon = () => <span className="bimg" />;

// Reusable Social Button
const SocialButton = ({ icon, text }) => (
  <button className="flex items-center gap-10 p-3 w-full max-w-xs bg-white border border-gray-300 rounded-lg text-[#FA8128] transition">
    {icon} {text}
  </button>
);

const Register = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleToLogin = () => navigate("/");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        { firstName, lastName, email, password }
      );

      if (response.data.success) {
        navigate("/landingpage", { state: { isLoggedIn: true } });
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during registration.");
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row w-full">
      {/* Left Section - Branding */}
      <div className="md:w-2/5 w-full h-[300px] md:h-full bg-[#FA8128] flex items-center justify-center relative">
        <div className="logoimg" />
        <div className="globeimg opacity-45 absolute bottom-0 right-0 w-32 h-32" />
      </div>

      {/* Right Section - Register Form */}
      <div className="flex-1 flex items-center justify-center px-6">
        <form onSubmit={handleRegister} className="w-full max-w-md bg-white rounded-lg">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-3">
              <h1 className="text-[#FA8128] font-medium text-4xl">Hello</h1>
            </div>
            <div className="crossimg cursor-pointer" onClick={() => navigate("/landingpage")} />
          </div>

          <h2 className="text-[#28d3fa] text-2xl font-light mb-6">Register</h2>

          {/* Inputs */}
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 mb-4 border-2 border-[#5DCAD1] rounded text-gray-600 placeholder-[#F8934A]/70 focus:outline-none focus:ring-2 focus:ring-[#F8934A]"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 mb-4 border-2 border-[#5DCAD1] rounded text-gray-600 placeholder-[#F8934A]/70 focus:outline-none focus:ring-2 focus:ring-[#F8934A]"
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 mb-4 border-2 border-[#5DCAD1] rounded text-gray-600 placeholder-[#F8934A]/70 focus:outline-none focus:ring-2 focus:ring-[#F8934A]"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 mb-2 border-2 border-[#5DCAD1] rounded text-gray-600 placeholder-[#F8934A]/70 focus:outline-none focus:ring-2 focus:ring-[#F8934A]"
            required
          />

          {/* Error */}
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <p className="text-[#5DCAD1] underline text-sm cursor-pointer">
              Forgot password?
            </p>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full h-12 bg-[#FA8128] text-white rounded-3xl font-semibold hover:bg-[#f77a20] transition"
          >
            Register
          </button>

          {/* Redirect to Login */}
          <div className="flex justify-center items-center gap-2 mt-3">
            <h2 className="text-[#5DCAD1] font-light">Already have an account?</h2>
            <button
              type="button"
              onClick={handleToLogin}
              className="text-[#FA8128] underline font-light"
            >
              Login
            </button>
          </div>

          {/* Social Buttons */}
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

export default Register;
