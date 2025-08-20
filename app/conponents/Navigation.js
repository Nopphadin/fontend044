// app/components/Navigation.js
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'หน้าแรก', sticker: '🏠' },
    { href: '/about', label: 'เกี่ยวกับเรา', sticker: '👋' },
    { href: '/service', label: 'ร้านค้าค้นหา', sticker: '🛍️' },
  ];

  const [navOpacity, setNavOpacity] = useState(1);
  const rafRef = useRef(null);

  useEffect(() => {
    const max = 300; // px to fully fade out
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset || 0;
        const next = Math.max(0, Math.min(1, 1 - y / max));
        setNavOpacity(next);
        rafRef.current = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm"
      style={{ background: 'linear-gradient(90deg, #8a2828ff, #7c3aed)', opacity: navOpacity, transition: 'opacity 200ms ease', pointerEvents: navOpacity < 0.05 ? 'none' : 'auto' }}
    >
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3ae.svg"
            alt="Game Logo"
            width={28}
            height={28}
          />
          <span className="fw-semibold">SearchEZ</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center">
            {links.map((link) => (
              <li key={link.href} className="nav-item">
                <Link
                  href={link.href}
                  className={`nav-link nav-sticker-link px-3 ${pathname === link.href ? 'active' : ''}`}
                >
                  <span className="link-text">{link.label}</span>
                  <span className="sticker" aria-hidden="true">{link.sticker}</span>
                </Link>
              </li>
            ))}

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle nav-sticker-link px-3"
                href="#"
                id="contactDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="link-text">ติดต่อ</span>
                <span className="sticker" aria-hidden="true">📞</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="contactDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.facebook.com/nopphadon.chaiya.2024"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li><a className="dropdown-item" href="#">Line</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://it.cmtc.ac.th/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    เว็บไซต์ IT CMTc
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex me-lg-3 my-3 my-lg-0" role="search">
            <div className="input-group search-group">
              <span className="input-group-text bg-transparent border-end-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search text-light"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.242 1.656a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
                </svg>
              </span>
              <input
                className="form-control border-start-0 bg-transparent text-light"
                type="search"
                placeholder="ค้นหา..."
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                ค้นหา
              </button>
            </div>
          </form>

          <div className="d-flex gap-2">
            <Link href="/login" className="btn btn-outline-light">
              Login
            </Link>
            <Link href="/register" className="btn btn-light text-primary">
              สมัครสมาชิก
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Sticker hover links */
        .nav-sticker-link {
          position: relative;
          border-radius: 999px;
          transition: background-color 0.2s ease, color 0.2s ease;
          line-height: 1.25rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .nav-sticker-link .sticker {
          position: absolute;
          top: -8px;
          right: -14px;
          font-size: 18px;
          opacity: 0;
          transform: translateY(-6px) scale(0.6) rotate(-10deg);
          transition: transform 220ms ease, opacity 180ms ease;
          pointer-events: none;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.25));
        }
        .nav-sticker-link:hover .sticker,
        .nav-sticker-link:focus-visible .sticker {
          opacity: 1;
          transform: translateY(0) scale(1) rotate(0deg);
          animation: wiggle 900ms ease-in-out both;
        }
        .nav-sticker-link:hover,
        .nav-sticker-link.active {
          background: rgba(255, 255, 255, 0.18);
        }
        .nav-link.active .link-text::after {
          content: '';
          display: block;
          height: 2px;
          border-radius: 2px;
          background: #ffffff;
          width: 100%;
          margin-top: 4px;
          opacity: 0.9;
        }

        @keyframes wiggle {
          0% { transform: translateY(0) scale(1) rotate(0deg); }
          20% { transform: translateY(-2px) scale(1.05) rotate(6deg); }
          40% { transform: translateY(1px) scale(0.98) rotate(-4deg); }
          60% { transform: translateY(-1px) scale(1.02) rotate(3deg); }
          80% { transform: translateY(0px) scale(1) rotate(-2deg); }
          100% { transform: translateY(0) scale(1) rotate(0deg); }
        }

        /* Search field glass effect */
        .search-group .form-control {
          border-color: rgba(255,255,255,0.35);
          color: #fff;
        }
        .search-group .form-control::placeholder { color: rgba(255,255,255,0.75); }
        .search-group .form-control:focus {
          box-shadow: 0 0 0 0.2rem rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.1);
        }

        /* Dropdown alignment tweak on small screens */
        @media (max-width: 991.98px) {
          .nav-sticker-link .sticker { right: -6px; top: -6px; }
        }
      `}</style>
    </nav>
  );
}
