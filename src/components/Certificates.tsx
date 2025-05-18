import React, { useState } from "react";
import "../styles/certificates.scss";            

const certs = [
  { src: "/assets/images/front.jpg",        alt: "Front‑End Nanodegree" },
  { src: "/assets/images/CSE.jpeg",        alt: "Computer Systems Engineer" },
  { src: "/assets/images/data-science.jpeg",        alt: "Data Science Training" },
  { src: "/assets/images/WIE.jpeg",        alt: "Women in Engineering Challenge" },
  { src: "/assets/images/joining_data.png", alt: "Joining Data" },
  { src: "/assets/images/sql.png",          alt: "SQL" },
  { src: "/assets/images/oop.png",          alt: "OOP" },
  { src: "/assets/images/python.png",       alt: "Python" },
  { src: "/assets/images/IEEXtreme.jpg",    alt: "IEEXtreme" },
  { src: "/assets/images/access12.jpeg",        alt: "English Access Microschoolership Program" },
] as const;


const Certificates: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = certs.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section id="certificates" className="certificates-section">
      <h2 className="section-title">Certificates</h2>

      <div className="slider">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {certs.map(({ src, alt }) => (
            <div className="slide" key={alt}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>

        <button className="slider-button prev" onClick={prev}>
          &lt;
        </button>
        <button className="slider-button next" onClick={next}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Certificates;
