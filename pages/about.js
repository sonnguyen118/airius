import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <div className="header-top-img">
      <Image
        src={`/img/xc.jpg`}
        alt="logo Airius"
        layout="fill"
        data-testid="close-icon"
        objectFit="contain"
      />
      {/* <img src="/xc.jpg" /> */}
    </div>
  );
};

export default about;
