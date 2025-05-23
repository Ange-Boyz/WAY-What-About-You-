import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import BirthdayPage from "./BirthdayPage";

export default function NamePage({ name, setName, currentStep = 1, totalSteps = 4 }) {
  const [step, setStep] = useState(1);
  const [showBirthday, setShowBirthday] = useState(false);

  // Calculate progress percentage
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  if (showBirthday) {
    return <BirthdayPage name={name} onBack={() => setShowBirthday(false)} />;
  }

  // Step 1: "Tell us about yourself"
  if (step === 1) {
    return (
      <div className="flex flex-col min-h-screen justify-between bg-white">
        <div />
        <div className="px-6">
          <div className="w-full h-1 bg-gray-200 rounded mb-4">
            <div
              className="h-1 bg-[#ed1c24] rounded transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <h1 className="text-xl font-bold mb-2">Tell us about yourself</h1>
          <p className="text-gray-500 mb-4">This is how your name will appear on WAY</p>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-8 focus:outline-none focus:border-[#ed1c24] transition"
          />
          <button
            className={`w-full py-3 rounded-full text-white text-lg font-semibold transition ${
              name ? "bg-[#ed1c24] hover:bg-red-700" : "bg-[#ed1c24]/60 cursor-not-allowed"
            }`}
            disabled={!name}
            onClick={() => setStep(2)}
          >
            Continue
          </button>
        </div>
        <div className="h-8" />
      </div>
    );
  }

  // Step 2: "What's your name?" with back arrow
  return (
    <div className="flex flex-col min-h-screen justify-between bg-white">
      <div />
      <div className="px-6">
        <button onClick={() => setStep(1)} className="mb-4">
          <FaArrowLeft className="text-gray-700" />
        </button>
        <div className="w-full h-1 bg-gray-200 rounded mb-4">
          <div
            className="h-1 bg-[#ed1c24] rounded transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <h1 className="text-xl font-bold mb-2">What's your name?</h1>
        <p className="text-gray-500 mb-4">This is how your name will appear on WAY</p>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-8 focus:outline-none focus:border-[#ed1c24] transition"
        />
        <button
          className={`w-full py-3 rounded-full text-white text-lg font-semibold transition ${
            name ? "bg-[#ed1c24] hover:bg-red-700" : "bg-[#ed1c24]/60 cursor-not-allowed"
          }`}
          disabled={!name}
          onClick={() => setShowBirthday(true)}
        >
          Continue
        </button>
      </div>
      <div className="h-8" />
    </div>
  );
}