import React, { useState } from "react";
import NamePage from "./NamePage";
import welcomeImg from "../assets/welcome.png";

export default function Welcome() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");

  if (step === 2) return <NamePage showBack={false} name={name} setName={setName} onContinue={() => setStep(3)} />;

  return (
    <div className="flex flex-col min-h-screen justify-between bg-white">
      <div />
      <div className="flex flex-col items-center px-6">
        <img src={welcomeImg} alt="Welcome" className="w-40 h-40 mb-6" />
        <h1 className="text-xl font-bold mb-2 text-center">Welcome on WAY</h1>
        <p className="text-gray-500 mb-8 text-center">
          We will ask you some questions to improve your experience.
        </p>
        <button className="w-full py-3 rounded-full text-white text-lg font-semibold bg-[#ed1c24] hover:bg-red-700 transition" onClick={() => setStep(2)}>
          Continue
        </button>
      </div>
      <div className="h-8" />
    </div>
  );
} 