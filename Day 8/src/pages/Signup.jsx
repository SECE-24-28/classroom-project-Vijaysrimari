import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    login({ name, email });
    navigate("/plans");
  };

  return (
    <div className="w-screen h-screen flex">

      {/* LEFT HERO WITH BACKGROUND IMAGE */}
      <div
        className="hidden md:flex flex-1 p-12 items-center bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/d4/f8/57/d4f857dca643da1c87003fb191b07bcf.jpg')",
        }}
      >
        {/* Frosted glass transparent container */}
        <div
          className="
            bg-white/30
            backdrop-blur-md
            p-6 md:p-8
            rounded-md
            shadow-xl
            border border-white/40
            max-w-2xl
          "
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
            All your plans. One place.
          </h2>

          <p className="text-base md:text-lg text-black font-medium">
            Manage recharges, get exclusive offers and pay bills —
            everything from a single dashboard.
          </p>
        </div>
      </div>

      {/* RIGHT SIGNUP CARD */}
      <div className="w-full md:w-[420px] flex items-center justify-center p-8 bg-white">
        <form
          onSubmit={handleSignup}
          className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl border border-gray-100"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Signup
          </h2>

          <label className="block mb-4">
            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-300 placeholder-gray-400 bg-white
                         focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </label>

          <label className="block mb-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-300 placeholder-gray-400 bg-white
                         focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold p-3 rounded-lg transition"
          >
            Signup
          </button>

          <p className="text-center mt-5 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>

    </div>
  );
};

export default Signup;
