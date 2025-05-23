import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import GenderPage from "./GenderPage";

export default function BirthdayPage({ name, onBack, currentStep = 3, totalSteps = 4 }) {
  const [step, setStep] = useState(1);
  const [birthday, setBirthday] = useState({ day: "", month: "", year: "" });

  const isValid = birthday.day && birthday.month && birthday.year;
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  if (step === 2) return <GenderPage name={name} onBack={() => setStep(1)} currentStep={4} totalSteps={4} />;

  return (
    <div className="flex flex-col min-h-screen justify-between bg-white">
      <div />
      <div className="px-6">
        <button onClick={onBack} className="mb-4">
          <FaArrowLeft className="text-gray-700" />
        </button>
        <div className="w-full h-1 bg-gray-200 rounded mb-4">
          <div
            className="h-1 bg-[#ed1c24] rounded transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <h1 className="text-xl font-bold mb-2">
          Hello {name}, When is your birthday?
        </h1>
        <p className="text-gray-500 mb-4">Fill the boxes below!</p>
        <div className="flex gap-2 mb-8">
          <input
            type="text"
            placeholder="DD"
            maxLength={2}
            value={birthday.day}
            onChange={e => setBirthday({ ...birthday, day: e.target.value.replace(/[^0-9]/g, "") })}
            className="w-14 border border-gray-300 rounded-lg px-2 py-3 text-center text-lg focus:outline-none focus:border-[#ed1c24] transition"
          />
          <input
            type="text"
            placeholder="MM"
            maxLength={2}
            value={birthday.month}
            onChange={e => setBirthday({ ...birthday, month: e.target.value.replace(/[^0-9]/g, "") })}
            className="w-14 border border-gray-300 rounded-lg px-2 py-3 text-center text-lg focus:outline-none focus:border-[#ed1c24] transition"
          />
          <input
            type="text"
            placeholder="YYYY"
            maxLength={4}
            value={birthday.year}
            onChange={e => setBirthday({ ...birthday, year: e.target.value.replace(/[^0-9]/g, "") })}
            className="w-20 border border-gray-300 rounded-lg px-2 py-3 text-center text-lg focus:outline-none focus:border-[#ed1c24] transition"
          />
        </div>
        <button
          className={`w-full py-3 rounded-full text-white text-lg font-semibold transition ${
            isValid ? "bg-[#ed1c24] hover:bg-red-700" : "bg-[#ed1c24]/60 cursor-not-allowed"
          }`}
          disabled={!isValid}
          onClick={() => setStep(2)}
        >
          Continue
        </button>
      </div>
      <div className="h-8" />
    </div>
  );
} 