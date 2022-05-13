import React from "react";
import Image from "next/image";

const ListApplication = (data_applications) => {
  // const products = [
  //   {
  //     title: "aviation",
  //     img: "/application/Featured-Image-Aviation.jpg",
  //   },
  //   {
  //     title: "church and community buildings",
  //     img: "/application/Featured-Image-Churches.jpg",
  //   },
  //   {
  //     title: "cooling",
  //     img: "/application/Featured-Image-Educational.jpg",
  //   },
  //   {
  //     title: "education",
  //     img: "/application/Featured-Image-Local-Authority.jpg",
  //   },
  //   {
  //     title: "local authority",
  //     img: "/application/Featured-Image-Manufacturing.jpg",
  //   },
  //   {
  //     title: "manufacturing",
  //     img: "/application/Featured-Image-Offices.jpg",
  //   },
  //   {
  //     title: "offices",
  //     img: "/application/Featured-Image-Retail.jpg",
  //   },
  //   {
  //     title: "retail",
  //     img: "/application/Featured-Image-Showrooms.jpg",
  //   },
  //   {
  //     title: "showrooms",
  //     img: "/application/Industries-Button-Image.jpg",
  //   },
  // ];
  return (
    <div className="list">
      {data_applications[0].map((product, i) => (
        <div className="list-application" key={product.id}>
          <>
            <div className="list-application-img">
              <Image
                src={product.source}
                alt="logo Airius"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
                className="list-application-img-es"
              />
            </div>
            <div className="list-application-btn">
              <p className="list-application-btn-title">
                {product.title.toUpperCase()}
              </p>
              <i className="list-application-btn-icon fas fa-arrow-right"></i>
            </div>
          </>
        </div>
      ))}
    </div>
  );
};

export default ListApplication;
