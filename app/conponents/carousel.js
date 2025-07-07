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
      <Image src="https://cdn.chiangmainews.co.th/wp-content/uploads/2020/10/04115936/IMG_4046-scaled.jpg" className="d-block w-100" alt="..." width={1920} height={690} />
    </div>
    <div className="carousel-item">
      <Image src="https://www.cmtc.ac.th/wp-content/uploads/2021/05/img01-edition.jpg" className="d-block w-100" alt="..." width={1920} height={690} />
    </div>
    <div className="carousel-item">
      <Image src="https://www.cmvc.ac.th/main/wp-content/uploads/2024/12/2112-24.jpg" className="d-block w-100" alt="..." width={1920} height={690} />
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