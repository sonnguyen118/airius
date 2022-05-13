import React from "react";
import Image from "next/image";

const Quote = () => {
  var myInput;
  return (
    <div className="quote">
      <div className="quote-img">
        <i className="quote-img-icon fas fa-quote-left"></i>
        <p className="quote-img-text">SEE WHAT OUR CLIENTS SAY</p>
        <div className="quote-img-btn">
          <p className="quote-img-btn-text">CASE STUDIES</p>
          <i className="quote-img-btn-icon fas fa-arrow-right"></i>
        </div>
      </div>
      <div className="quote-tell">
        <div className="quote-tell-img">
          {/* <Image
            src={`/img/airius-logo-red-footer.png`}
            alt="logo Airius"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          /> */}
        </div>
        <div className="quote-tell-text">
          <p className="quote-tell-text-header">Stay Ahead Of The Curve</p>
          <p className="quote-tell-text-body">
            Sign up here to receive the latest news and developments in
            destratification in our bi-monthly newsletter - AirMail
          </p>
        </div>
        <form action="#" method="post" className="quote-tell-submit">
          <input
            type="text"
            name="airius-input"
            placeholder="Email"
            value={myInput}
            className="quote-tell-submit-input"
          ></input>
          <div type="submit" className="quote-tell-submit-btn">
            <p className="quote-tell-submit-btn-text">SUBMIT</p>
            <i className="quote-tell-submit-btn-icon fab fa-telegram-plane"></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quote;
