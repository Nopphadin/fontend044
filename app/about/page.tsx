"use client";
import React from "react";
import './about.css'
const About: React.FC = () => (
  <div className="about-wrapper">
    <div className="about-card">
      <h1>เกี่ยวกับเรา</h1>
      <p className="intro">
        เราคือเว็บรวมเกมที่ดังๆ
      </p>

      {/* เป้าหมาย */}
      <div className="section">
        <h2>🌟 เป้าหมาย</h2>
        <p>มุ่งให้ผู้ชอบเล่นเกมหาเกมที่น่าสนใจได้ง่ายขึ้น</p>
      </div>

      {/* ทีม */}
      <div className="section">
        <h2>👥 ทีมของเรา</h2>
        <ul className="team-list">
          <li>นายa– CEO</li>
          <li>นายb – Dev Lead</li>
          <li>นายc – Marketing Lead</li>
        </ul>
      </div>

      {/* ติดต่อ */}
      <div className="section">
        <h2>📬 ติดต่อเรา</h2>
        <p>✉️ support@forexstyle.com</p>
        <p>💬 Facebook: @ForexStyleOfficial</p>
      </div>
    </div>
  </div>
);

export default About;
