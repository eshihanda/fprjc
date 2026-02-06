import React from "react";
import unfpa from "../assets/unfpa.png";
import ohchr from "../assets/ohchr.png";
import femnet from "../assets/femnet.png";
import rfsu from "../assets/rfsu.png";
import riseup from "../assets/riseup.png";
import awdf from "../assets/awdf.png";
import "../Styles/OurPartners.css";

const OurPartners = () => {
  const logos = [
    { img: unfpa, name: "UNFPA" },
    { img: ohchr, name: "OHCHR" },
    { img: femnet, name: "FEMNET", className: "logo-large", showName: true },
    { img: rfsu, name: "RFSU" },
    { img: riseup, name: "Rise Up", className: "logo-large", showName: true },
    { img: awdf, name: "AWDF" },
  ];

  return (
    <section className="py-5 bg-light partners-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side text */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 className="text-uppercase fw-bold text-purple mb-2">
              Our Partners
            </h4>
            <p className="text-muted">
              These are the organizations that we proudly collaborate with to
              advance the FPRJC mission of ensuring gender equality, justice,
              and empowerment.
            </p>
          </div>

          {/* Right side logos */}
          <div className="col-md-8">
            <div className="partner-slide d-flex align-items-center">
              <div className="slide-track d-flex align-items-center">
                {[...logos, ...logos].map((logo, index) => (
                  <div className="slide" key={index}>
                    <img
                      src={logo.img}
                      alt={logo.name}
                      className={logo.className || ""}
                    />

                    {/* Show name ONLY for selected logos */}
                    {logo.showName && (
                      <p className="partner-name">{logo.name}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
