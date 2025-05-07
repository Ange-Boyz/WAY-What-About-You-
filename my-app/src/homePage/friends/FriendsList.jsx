import React from "react";
import angeBoyzImg from './assets/ange_boyz.jpg';
import isabelaImg from './assets/isabela.jpg';
import bryanAdemolaImg from './assets/bryan_ademola.jpg';
import laurianeJlowwImg from './assets/lauriane_jloww.jpg';
import locationIcon from './assets/location.png';
import { Link } from "react-router-dom";

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
  single: { borderColor: "#008774", label: "Single" },
  couple: { borderColor: "#be161d", label: "Couple" },
  friend: { borderColor: "#005a96", label: "Friend" },
};

function FriendCard({ name, city, image, status }) {
  const { borderColor, label } = statusStyles[status] || statusStyles.friend;
  return (
    <div
      style={{
        border: `2.5px solid ${borderColor}`,
        borderRadius: "18px",
        padding: "10px 10px 16px 10px",
        margin: "0",
        width: "165px",
        boxSizing: "border-box",
        position: "relative",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "145px",
          height: "145px",
          objectFit: "cover",
          borderRadius: "14px",
        }}
      />
      <div style={{ marginTop: "10px", fontWeight: 600, fontSize: "16px", textAlign: "center" }}>{name}</div>
      <div
        style={{
          color: "#888",
          fontSize: "13px",
          marginBottom: "8px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img
          src={locationIcon}
          alt="location"
          style={{ width: "14px", height: "14px", marginRight: "4px" }}
        />
        {city}
      </div>
      <Link to={`/profile/${name}`}>
        <button
          style={{
            marginTop: "auto",
            padding: "7px 0",
            width: "100%",
            borderRadius: "10px",
            border: "none",
            background: "#f2f2f2",
            color: "#005a96",
            fontWeight: 500,
            fontSize: "14px",
            cursor: "pointer",
            boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
          }}
        >
          See the profile
        </button>
      </Link>
    </div>
  );
}

export default function FriendsList() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(165px, 1fr))",
        gap: "18px 10px",
        justifyItems: "center",
        maxWidth: "370px",
        margin: "0 auto",
        padding: "18px 0",
        width: "100%",
      }}
    >
      {friends.map((friend, idx) => (
        <FriendCard key={idx} {...friend} />
      ))}
    </div>
  );
} 