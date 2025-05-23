import React, { useState } from "react";
import Welcome from "./Welcome";

export default function VerifyMail() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [step, setStep] = useState(1);

  const handleChange = (e, idx) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);
    if (value && idx < 5) {
      document.getElementById(`otp-${idx + 1}`).focus();
    }
  };

  if (step === 2) return <Welcome />;

  return (
    <div className="flex flex-col min-h-screen justify-between bg-white">
      <div />
      <div className="px-6">
        <h1 className="text-xl font-bold mb-2">Verify your mail</h1>
        <p className="text-gray-500 mb-6">We'll send a verification number to your email address.</p>
        <div className="flex justify-between mb-8">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              id={`otp-${idx}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(e, idx)}
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl font-semibold focus:outline-none focus:border-[#ed1c24] transition"
            />
          ))}
        </div>
        <button
          className={`w-full py-3 rounded-full text-white text-lg font-semibold transition ${
            otp.every(d => d) ? "bg-[#ed1c24] hover:bg-red-700" : "bg-[#ed1c24]/60 cursor-not-allowed"
          }`}
          disabled={!otp.every(d => d)}
          onClick={() => setStep(2)}
        >
          Continue
        </button>
      </div>
      <div className="h-8" />
    </div>
  );
} 