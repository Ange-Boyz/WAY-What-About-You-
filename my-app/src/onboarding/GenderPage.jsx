import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Welcome from "./Welcome"; // Import the next step

const options = [
  "Male",
  "Female",
  "Prefer not to say" // Add or remove options as needed
];

export default function GenderPage({ name, onBack }) {
  const [gender, setGender] = useState("");
  const [step, setStep] = useState(1);

  if (step === 2) {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center bg-white">
        <h1 className="text-2xl font-bold mb-4 text-[#ed1c24]">Onboarding Complete!</h1>
        <p className="text-gray-700 text-lg">Thank you, {name}!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen justify-between bg-white">
      <div />
      <div className="px-6">
        <button onClick={onBack} className="mb-4">
          <FaArrowLeft className="text-gray-700" />
        </button>
        <h1 className="text-xl font-bold mb-2">
          What's your gender{name ? ` ${name}` : ""}?
        </h1>
        <p className="text-gray-500 mb-4">This is how you will appear on WAY</p>
        <div className="flex flex-col gap-3 mb-8">
          {options.map(option => (
            <label
              key={option}
              className={`flex items-center border rounded-lg px-4 py-3 cursor-pointer transition ${
                gender === option
                  ? "border-[#ed1c24] bg-[#ed1c24]/10"
                  : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="gender"
                value={option}
                checked={gender === option}
                onChange={() => setGender(option)}
                className="accent-[#ed1c24] mr-3"
              />
              <span className="text-base">{option}</span>
            </label>
          ))}
        </div>
        <button
          className={`w-full py-3 rounded-full text-white text-lg font-semibold transition ${
            gender ? "bg-[#ed1c24] hover:bg-red-700" : "bg-[#ed1c24]/60 cursor-not-allowed"
          }`}
          disabled={!gender}
          onClick={() => setStep(2)}
        >
          Continue
        </button>
      </div>
      <div className="h-8" />
    </div>
  );
} 