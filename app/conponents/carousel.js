'use client';
import { useEffect } from 'react';
import Image from "next/image";
export default function Carousel() {
 
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
<div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src="https://www.cmtc.ac.th/wp-content/uploads/2025/03/banner-slide-ITA67-21032025.png" className="d-block w-100" alt="..." width={1920} height={690} />
    </div>
    <div className="carousel-item">
      <Image src="https://www.cmtc.ac.th/wp-content/uploads/2025/07/%E0%B9%81%E0%B8%AA%E0%B8%94%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A2%E0%B8%B4%E0%B8%99%E0%B8%94%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%90%E0%B8%A1%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%A3%E0%B8%A7%E0%B8%87%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3.png" className="d-block w-100" alt="..." width={1920} height={690} />
    </div>
    <div className="carousel-item">
      <Image src="https://www.share2trade.com/storage/Web%20Board/2024/241024/SYNEX_241024_%E0%B8%8B%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%99%E0%B9%87%E0%B8%84%E0%B8%AF%20%E0%B8%9B%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%8A%E0%B9%88%E0%B8%B2%E0%B8%87%20%E0%B9%80%E0%B8%97%E0%B8%84%E0%B8%99%E0%B8%B4%E0%B8%84%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%20(1).jpg" className="d-block w-100" alt="..." width={1920} height={690} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
}