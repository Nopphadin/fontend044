"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import './login.css';

const Login: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ตัวอย่างเช็คง่ายๆ
    if (!formData.username || !formData.password) {
      alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
      return;
    }
    console.log("Login data:", formData);
    // สมมุติว่าล็อกอินสำเร็จ
    router.push("/dashboard"); // หรือหน้าอื่นที่ต้องการ
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>เข้าสู่ระบบ</h2>
        <p className="subtitle">
          กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="username">ชื่อผู้ใช้ หรือ อีเมลล์</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            autoComplete="username"
          />

          <label htmlFor="password">รหัสผ่าน</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />

          <button type="submit" className="btn-login">
            เข้าสู่ระบบ
          </button>
        </form>

        <p className="register-link">
          ยังไม่มีบัญชี?{" "}
          <a href="/register">สมัครสมาชิกที่นี่</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
