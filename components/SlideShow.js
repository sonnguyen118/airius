import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const SlideShow = (data_slides) => {
  const [index, setIndex] = useState(0);
  // console.log("my data", data_slides);
  // const images = data.data;
  // const images = [
  //   {
  //     source: "/img/PureAir-Series-Banner-1.jpg",
  //     title1: "CORONAVIRUS",
  //     title2: "COVID-19",
  //     title3: "",
  //     description:
  //       "Keep your environments clean and safe with the PureAir Series, eliminating up to 99% of all bacteria and viruses",
  //   },
  //   {
  //     source: "/img/home-slider-2.jpg",
  //     title1: "HIGH LEVEL,",
  //     title2: "INDUSTRIAL,",
  //     title3: "RETAIL & COMMERCIAL",
  //     description: "Contact Us At Airius Electrical Contractors",
  //   },
  //   {
  //     source: "/img/Banner-2-Heathrow.webp",
  //     title1: "SAVE 20% TO 50% ON",
  //     title2: "HEATING & COOLING",
  //     title3: "COSTS",
  //     description: "While also significantly reducing your CO2 emissions",
  //   },
  //   {
  //     source: "/img/Airius-Onyx-Destratification-fan-Banner-1.jpg",
  //     title1: "LATEST IN",
  //     title2: "DESTRATIFICATION",
  //     title3: "FAN TECHNOLOGY",
  //     description:
  //       "Multi-Vane Stator, Airflow Bypass & Columnar Laminar Flow System",
  //   },
  //   {
  //     source: "/img/Airius-destratification-fans-banner-1.jpg",
  //     title1: "SAVE 20% TO 50% ON",
  //     title2: "HEATING & COOLING",
  //     title3: "COSTS",
  //     description: "While also significantly reducing your CO2 emissions",
  //   },
  // ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  var slideIndex = 0;
  useEffect(() => {
    showSlides();
  }, [1]);

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slideshow-wrap");
    // console.log(slides, "slideshow: slides");
    // console.log(slides.length, slides);
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 8000);
  }
  return (
    <div className="slideshow">
      {data_slides[0].map((img, i) => (
        <>
          <div
            className="slideshow-wrap"
            key={i}
            style={{
              backgroundImage: `url(https://hidden-fortress-12666.herokuapp.com${img.source})`,
            }}
          >
            <div className="slideshow-wrap-content">
              <h1 className="slideshow-wrap-content-title">
                {img.title_1}
                <br />
                {img.title_2}
                <br />
                {img.title_3}
              </h1>
              <p className="slideshow-wrap-content-description">
                {img.description}
              </p>
              <div className="slideshow-wrap-content-btn">
                <p className="slideshow-wrap-content-btn-text">FIND OUT MORE</p>
                <i className="slideshow-wrap-content-btn-icon fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
// export async function getStaticProps({ params }) {
//   const res = await fetch(`http://127.0.0.1:8000/api/slides`);
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default SlideShow;
