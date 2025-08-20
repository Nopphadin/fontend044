"use client";
import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import './register.css';
import Swal from 'sweetalert2';

const Register: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '', // ✅ เพิ่ม
    prefix: '',
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    birthdate: '',
    acceptedTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.acceptedTerms) {
      Swal.fire({
        icon: 'warning',
        title: 'กรุณายอมรับเงื่อนไขการใช้งาน',
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'รหัสผ่านไม่ตรงกัน',
      });
      return;
    }

    const bodyData = {
      username: formData.username,
      password: formData.password,
      firstname: formData.firstName,
      lastname: formData.lastName,
      fullname: `${formData.prefix}${formData.firstName} ${formData.lastName}`, // ✅ แก้จาก ${} ให้ใส่ใน backtick ``
      gender: formData.gender,
      address: formData.address,
      birthdate: formData.birthdate, // ✅ ใช้ birthdate โดยตรง
    };

    try {
      const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(bodyData),
      });

      const result = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'สมัครสมาชิกสำเร็จ!',
          text: 'คุณสามารถเข้าสู่ระบบได้ทันที',
        }).then(() => {
          router.push('/login');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด!',
          text: result?.message || 'ไม่สามารถสมัครสมาชิกได้',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด',
        text: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้',
      });
      console.error(error);
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <div className="register-header">
          <a href="/login" className="back-btn">◀ กลับเข้าสู่ระบบ</a>
          <h2>ลงทะเบียนสมาชิก</h2>
          <p className="subtitle">สมัครสมาชิค</p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-section">
            <h3>บัญชีผู้ใช้</h3>

            <label>ชื่อผู้ใช้ หรือ อีเมลล์</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label>รหัสผ่าน</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label>รหัสผ่าน (ยืนยันอีกครั้ง)</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-section">
            <h3>ข้อมูลส่วนตัว</h3>

            <label>คำนำหน้าชื่อ</label>
            <select
              name="prefix"
              value={formData.prefix}
              onChange={handleChange}
              required
            >
              <option value="">-- เลือก --</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
              <option value="">ไม่ระบุ</option>
            </select>

            <label>ชื่อ</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <label>นามสกุล</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <label>วันเกิด</label>
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
            />

            <label>เพศ</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                ชาย
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                หญิง
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={handleChange}
                />
                อื่นๆ
              </label>
            </div>

            <label>ที่อยู่</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              required
              className="address-textarea"
            ></textarea>
          </div>

          <div className="checkbox-inline">
            <input
              type="checkbox"
              id="acceptedTerms"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="acceptedTerms">ฉันยอมรับเงื่อนไขการใช้งาน</label>
          </div>

          <button type="submit" className="btn-register">
            ลงทะเบียน
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
