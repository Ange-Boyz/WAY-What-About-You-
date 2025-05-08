import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import angeBoyzImg from '../../assets/ange_boyz.jpeg';
import isabelaImg from '../../assets/isabela.jpeg';
import bryanAdemolaImg from '../../assets/bryan_ademola.jpeg';
import laurianeJlowwImg from '../../assets/lauriane_jloww.jpeg';

const friends = [
  {
    name: "Ange Boyz",
    city: "Yaoundé",
    image: angeBoyzImg,
    status: "friend",
  },
  {
    name: "Isabela",
    city: "Douala",
    image: isabelaImg,
    status: "couple",
  },
  {
    name: "Bryan ADEMOLA",
    city: "Buea",
    image: bryanAdemolaImg,
    status: "single",
  },
  {
    name: "Lauriane JLOWW",
    city: "Yaoundé",
    image: laurianeJlowwImg,
    status: "couple",
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
    <div className={`relative rounded-[22px] overflow-hidden border-[3.5px] ${borderColor} w-[170px] flex flex-col justify-end shadow-md`}>
      <img src={image} alt={name} className="w-full h-[120px] object-cover" />
      <div className="relative z-10 w-full bg-black/30 backdrop-blur-[2px] p-3 flex flex-col items-center rounded-b-[22px]">
        <div className="font-bold text-white text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] text-center break-words">{name}</div>
        <div className="flex items-center text-white text-xs drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mb-2">
          <FaMapMarkerAlt className="mr-1" />
          {city}
        </div>
        <Link to={`/profile/${name}`}>
          <button className="bg-white/60 text-white text-xs font-semibold rounded-full px-4 py-1.5 shadow hover:bg-white/80 transition border border-white">
            See the profile
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function FriendsList() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-[380px] mx-auto py-4">
      {friends.map((friend, idx) => (
        <FriendCard key={idx} {...friend} />
      ))}
    </div>
  );
} 