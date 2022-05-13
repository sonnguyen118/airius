import React, { Component } from "react";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";

const ListCompany = (data_company) => {
  const [index, setIndex] = useState(0);
  const settings = {
    dots: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    pauseOnHover: true,
  };
  // const images = [
  //   "/company/Airbus-Trusts-in-Airius.jpg",
  //   "/company/Asda-Trusts-in-Airius.png",
  //   "/company/Audi-Trusts-in-Airius.png",
  //   "/company/Australian-Government-Trusts-in-Airius.jpg",
  //   "/company/BAA-Trusts-in-Airius.png",
  //   "/company/Babcock-International-Trusts-in-Airius.png",
  //   "/company/Bank-of-England-Trusts-in-Airius.png",
  //   "/company/Beacon-Museum-TrustS-in-Airius.png",
  //   "/company/Boots-Trusts-in-Airius.png",
  //   "/company/Bowlplex-Trusts-in-Airius.png",
  //   "/company/Brewers-Trusts-in-Airius.png",
  //   "/company/British-Airways-Trusts-in-Airius.png",
  //   "/company/British-Telecom-Trusts-in-Airius.png",
  //   "/company/British-Waterways-Trusts-in-Airius.png",
  //   "/company/Brewers-Trusts-in-Airius.png",
  //   "/company/British-Airways-Trusts-in-Airius.png",
  //   // "/company/British-Telecom-Trusts-in-Airius.png",
  //   // "/company/British-Waterways-Trusts-in-Airius.png",
  // ];
  // const handleArrow = (direction) => {
  //   if (direction === "l") {
  //     setIndex(index !== 0 ? index - 1 : 2);
  //   }
  //   if (direction === "r") {
  //     setIndex(index !== 2 ? index + 1 : 0);
  //   }
  // };
  // const numbercompany = images.length;
  return (
    <div className="list-company">
      {/* <h1>list công ty</h1>
      {console.log("company", data_company[0])} */}
      <Slider {...settings}>
        {data_company[0].map((img, i) => (
          <div className="list-company-group-img" key={i}>
            <Image src={img.source} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ListCompany;
