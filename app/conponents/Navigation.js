// app/components/Navigation.js
'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
 
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
  <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width={30} height={24} />
</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Fontend</a>
        </li>

        <li className="nav-item">
          <Link href="/"className="nav-link">หน้าแรก</Link>
        </li>

         <li className="nav-item">
          <Link href="/about"className="nav-link">เกี่ยวกับเรา</Link>
        </li>
        <li className="nav-item dropdown">
           <Link className="nav-link dropdown-toggle" href="service" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            บริการต่างๆ
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>    
           <li className="nav-item">
          <Link href="/contact" className="nav-link dropdown-toggle">ติดต่อ</Link>
        </li>

      {/* <a href="login" className="btn relative btn-primary flex items-center justify-center px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-700">Login</a> */}

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success me-2" type="submit">Search</button>
      </form>
    </div>

    <div className='d-flex gap-2'>
     <Link href="/login" className="btn relative btn-primary flex items-center justify-center px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-700">Login</Link>
     <Link href="/register" className='btn relative btn-primary flex items-center justify-center px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-700'>สมัครสมาชิก</Link>
    </div>
  </div> 
</nav>



  );
}