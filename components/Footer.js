import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-about">
        <div className="footer-about-col">
          <p className="footer-about-col-title">ABOUT AIRIUS</p>
          <p className="footer-about-col-body">
            We are a UK based company providing Purification, Destratification,
            LED Lighting and Electrical Contracting Services.
          </p>
        </div>
        <div className="footer-about-col">
          <p className="footer-about-col-title">CONTACT US</p>
          <p className="footer-about-col-body">
            Holwell Farm, Cranborne, Dorset, BH21 5QP - UK
          </p>
          <div className="footer-about-col-bodyes">
            <i className="footer-about-col-bodyes-icon fas fa-phone-alt"></i>
            <p className="footer-about-col-bodyes-text">+44 (0) 1202 554200</p>
          </div>
          <div className="footer-about-col-bodyes">
            <i className="footer-about-col-bodyes-icon fas fa-envelope"></i>
            <p className="footer-about-col-bodyes-text">info@airius.co.uk</p>
          </div>
        </div>
        <div className="footer-about-col">
          <p className="footer-about-col-title">OUR EXPERTISE</p>
          <p className="footer-about-col-body">Destratification</p>
          <p className="footer-about-col-body">Lighting</p>
          <p className="footer-about-col-body">Electrical</p>
        </div>
        <div className="footer-about-col">
          <p className="footer-about-col-title">QUICK LINKS</p>
          <p className="footer-about-col-body">Resources</p>
          <p className="footer-about-col-body">Industries</p>
          <p className="footer-about-col-body">Technical Downloads</p>
          <p className="footer-about-col-body">FAQs</p>
        </div>
        <div className="footer-about-col">
          <p className="footer-about-col-title">SUPPORT</p>
          <p className="footer-about-col-body">Contact Us</p>
          <p className="footer-about-col-body">120 Day Money Back Guarantee</p>
          <p className="footer-about-col-body">Warranty</p>
          <p className="footer-about-col-body">Terms & Conditions</p>
          <p className="footer-about-col-body">Privacy Policy</p>
          <p className="footer-about-col-body">HTML Sitemap</p>
        </div>
      </div>

      <div className="footer-copy">
        <div className="footer-copy-right">
          <p className="footer-copy-right-text">
            © Copyright 2022 AIRIUS. All Rights Reserved.
          </p>
          <div className="footer-copy-right-group">
            <i className="footer-copy-right-group-icon fab fa-facebook-f"></i>
            <i className="footer-copy-right-group-icon fab fa-twitter"></i>
            <i className="footer-copy-right-group-icon fab fa-instagram"></i>
            <i className="footer-copy-right-group-icon fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
