import React from "react";
import angeBoyzImg from '../../assets/ange_boyz.jpeg'
import isabelaImg from '../../assets/isabela.jpeg';
import bryanAdemolaImg from '../../assets/bryan_ademola.jpeg';
import laurianeJlowwImg from '../../assets/lauriane_jloww.jpeg';
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const friends = [
  {
    name: "Ange Boyz",
    city: "Yaoundé",
    image: angeBoyzImg,
    status: "friend", // "single", "couple", or "friend"
  },
  {
    name: "Isabela",
    city: "Douala",
    image: isabelaImg,
    status: "couple",
  },
  {
    name: "Bryan ADEMOLA",
    city: "Ebolowa",
    image: bryanAdemolaImg,
    status: "single",
  },
  {
    name: "Lauriane JLOWW",
    city: "Yaoundé",
    image: laurianeJlowwImg,
    status: "friend",
  },
];

const statusStyles = {
  single: "border-[#008774]",
  couple: "border-[#be161d]",
  friend: "border-[#005a96]",
};

function FriendCard({ name, city, image, status }) {
  const borderColor = statusStyles[status] || statusStyles.friend;
  return (
    <div
      className={`flex flex-col items-center bg-white rounded-xl shadow-md p-3 w-[165px] border-2 ${borderColor}`}
    >
      <img
        src={image}
        alt={name}
        className="w-[145px] h-[145px] object-cover rounded-lg"
      />
      <div className="mt-2 font-semibold text-base text-center">{name}</div>
      <div className="flex items-center justify-center text-gray-500 text-sm mb-2">
        <FaMapMarkerAlt className="mr-1 text-gray-400 text-[15px]" />
        {city}
      </div>
      <Link to={`/profile/${name}`} className="w-full">
        <button
          className="w-full mt-auto py-2 rounded-lg bg-gray-100 text-[#005a96] font-medium text-sm shadow-sm hover:bg-gray-200 transition"
        >
          See the profile
        </button>
      </Link>
    </div>
  );
}

export default function FriendsList() {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-4 max-w-[370px] mx-auto py-4 w-full">
      {friends.map((friend, idx) => (
        <FriendCard key={idx} {...friend} />
      ))}
    </div>
  );
} 