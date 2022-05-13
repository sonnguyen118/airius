import React from "react";

const Category = (data_categories) => {
  // const categories = [
  //   {
  //     title: "AIR PURIFICATION",
  //     img: "/img/Air-Purification-Icon.jpg",
  //     contentHeader: "24/7 Active Air Purification",
  //     contentBody:
  //       "The PureAir Series is an Air & Surface Purification fan system, eliminating up to 99.99% of all known Viruses, Germs & Bacteria, reduces Mould, Odours, VOCs & provides fresh, clean air.",
  //   },
  //   {
  //     title: "Destratification",
  //     img: "/img/Destrat-Icon.jpg",
  //     contentHeader: "World Leaders In Destratification",
  //     contentBody:
  //       "We have helped thousands of businesses worldwide, from SMEs to major blue chip companies make real reductions in their energy usage and carbon emissions.",
  //   },
  //   {
  //     title: "Lighting",
  //     img: "/img/lighting-homepage-img.png",
  //     contentHeader: "Lighting The Way Forward For Your Business",
  //     contentBody:
  //       "We pride ourselves on developing cutting edge LED lighting solutions that lead the way forward in creating more exciting, productive  and cost efficient environments.",
  //   },
  // ];
  return (
    <div className="category">
      <div className="category-wall"></div>
      <div className="category-main">
        {data_categories[0].map((categori, i) => (
          <div className="category-main-item" key={i}>
            <div className="category-main-item-title">
              {categori.title.toUpperCase()}
            </div>
            <div
              className="category-main-item-img"
              style={{
                backgroundImage: `url(https://hidden-fortress-12666.herokuapp.com${categori.source})`,
              }}
            ></div>
            <div className="category-main-item-content">
              <div className="category-main-item-content-header">
                {categori.contentHeader.toUpperCase()}
              </div>
              <div className="category-main-item-content-description">
                {categori.contentBody}
              </div>
              <div className="category-main-item-content-btn">
                <p className="category-main-item-content-btn-text">KNOW MORE</p>
                <i className="category-main-item-content-btn-icon fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
