import React from "react";
import Image from "next/image";

const Header = ({ data_navbar }) => {
  const listMenu = [
    "Air Purification",
    "Destratification",
    "Lighting",
    "Electrical",
    "Industries",
    "Resources",
  ];
  console.log(listMenu[0], "a");
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top-img"></div>
        <div className="header-top-content">
          <div className="header-top-content-phone">
            <i className="header-top-content-phone-icon fas fa-phone-alt"></i>
            <div className="header-top-content-phone-number">
              {" "}
              +44 (0) 1202 554200
            </div>
          </div>
          <div className="header-top-content-text">About Us</div>
          <div className="header-top-content-text">Support</div>
          <div className="header-top-content-language">
            <div className="header-top-content-language-img"></div>
            <div className="header-top-content-language-text">English</div>
          </div>
          <i className="header-top-content-search fas fa-search"></i>
        </div>
      </div>

      <div className="header-bottom">
        <div className="header-bottom">
          {listMenu.map((listMenu, index, listMenus) => (
            <div className="header-bottom-item" key={index}>
              {listMenus[index]}
            </div>
          ))}
        </div>
        <div className="header-bottom-contacts">
          <div className="header-bottom-contacts-text">CONTACT US</div>
          <i className="header-bottom-contacts-icon fas fa-envelope"></i>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const navbar = await fetch(
    `https://hidden-fortress-12666.herokuapp.com/api/navbar`
  );
  const data_navbar = Array(await navbar.json());
  return {
    props: {
      data_navbar,
    },
  };
}

export default Header;
