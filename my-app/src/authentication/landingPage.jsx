import React from "react";
import { useState, useEffect } from "react";
import image1 from "../assets/landing-image1.svg";
import image2 from "../assets/landing-image2.svg";
import image3 from "../assets/landing-image3.svg";
import { Link } from "react-router-dom";

export default function landingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images de démonstration avec leurs légendes
  const slides = [
    {
      image: image1,
      caption: "Meet new people, Everywhere 🌍",
      text: " Close to your locality or not you can to meet people with same interest like you.",
    },
    {
      image: image2,
      caption: "Love or friendship? You decide 💞",
      text: "Meaningful or just open to see where it goes? Tell us your vibe, we’ll take care of the rest.",
    },
    {
      image: image3,
      caption: "Your color is talking for you !😎",
      text: "Pick a color that matches your SITUATION — it helps others get a feel for your energy from the start.",
    },
  ];

  // Changement automatique des slides toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Navigation manuelle du carrousel
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="justify-center flex flex-col min-h-screen bg-gray-50  ">
      {/* Carrousel */}
      <div className="relative w-full h-[42vh] md:h-96 mb-10 md:mb-3">
        {/* Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="m-auto h-full object-cover "
            />
          </div>
        ))}

        {/* Boutons de navigation */}
        <button
          onClick={prevSlide}
          className="hidden top-1/2 left-4 md:block absolute transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:block  absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Indicateurs de position (points rouges) */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-red-600" : "bg-red-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="">
        {/* Description de l'image courant titre */}
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-800  font-poppins ">
            {slides[currentSlide].caption}
          </p>
        </div>
        {/* Description de l'image courante */}
        <div className="text-center">
          <p className="text-lg px-13 md:px-0 font-medium text-gray-800 ">
            {slides[currentSlide].text}
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className=" flex flex-col items-center justify-center pb-6">
        {/* Boutons Login et Sign up */}
        <div className="flex flex-col text-center gap-4 mt-4">
          <Link to="/signUp">
            <button className=" px-30 py-2 bg-[#ed1c24] text-white font-semibold rounded-full hover:scale-110 transition duration-150 ease-in-out">
              Sign up
            </button>
          </Link>

          <Link to="/login">
            <button className="px-30 py-2 border-1 border-[#ED1C24]  font-semibold rounded-full hover:scale-110 transition duration-150 ease-in-out">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
