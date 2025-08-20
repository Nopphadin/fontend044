"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import './login.css';
import Swal from 'sweetalert2';

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      await Swal.fire({
        icon: 'warning',
        title: 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน',
      });
      return;
    }
    // สมมุติว่าล็อกอินสำเร็จ
    try {
      localStorage.setItem('isLoggedIn', 'true');
    } catch {}

    await Swal.fire({
      icon: 'success',
      title: 'เข้าสู่ระบบสำเร็จ!',
      text: 'ต้องการไปหน้า Admin หรือหน้าแรก?',
      showCancelButton: true,
      confirmButtonText: 'ไปหน้า Admin',
      cancelButtonText: 'หน้าแรก',
      confirmButtonColor: '#f59e0b',
      cancelButtonColor: '#3b82f6',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/Admin/users');
      } else {
        router.push('/');
      }
    });
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Login</h2>
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
