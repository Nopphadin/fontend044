// app/components/Navigation.js
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'หน้าแรก' },
    { href: '/about', label: 'เกี่ยวกับเรา' },
    { href: '/service', label: 'ร้านค้าค้นหา' },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm"
      style={{ background: 'linear-gradient(90deg, #0ea5e9, #7c3aed)' }}
    >
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Logo"
            width={30}
            height={24}
          />
          <span className="fw-semibold">Frontend 044</span>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li key={link.href} className="nav-item">
                <Link
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="contactDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ติดต่อ
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
            <div className="input-group">
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
                className="form-control border-start-0"
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
              เข้าสู่ระบบ
            </Link>
            <Link href="/register" className="btn btn-light text-primary">
              สมัครสมาชิก
            </Link>
            <Link href="/Admin/users" className="btn btn-warning">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
