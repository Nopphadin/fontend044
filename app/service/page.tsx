"use client";
import React from "react";
import './service.css'

const games = [
  {
    id: 1,
    name: "Ark survival evolved",
    description: "เกมเอาชีวิตรอดในโลกดึกดำบรรพ",
    image: "/ark.jpg",
  },
  {
    id: 2,
    name: "Darksoul",
    description: "เกมแอคชั่น RPG",
    image: "/hero.jpg",
  },
  {
    id: 3,
    name: "Black myth wukong",
    description: "เกมแอคชั่นผจญภัยที่สร้างจากวรรณกรรมจีน",
    image: "/wu.jpg",
  },
];

const Store: React.FC = () => {
  return (
    <div className="store-wrapper">
      <h1 className="store-title">ร้านแนะนำเกมของเรา 🎮</h1>
      <div className="store-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.name} className="game-img" />
            <h2>{game.name}</h2>
            <p>{game.description}</p>
            <button className="buy-btn">ดูรายละเอียด</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
