import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "../Styles/TopHeader.css";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="top-header-container">

        <div className="top-item">
          <FaMapMarkerAlt />
          <span>Olympic Estate, Kibra, Nairobi, Kenya</span>
        </div>

        <div className="top-item">
          <FaClock />
          <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
        </div>

        <div className="top-item">
          <FaEnvelope />
          <span>executivedirector@fprjc-center.org</span>
        </div>

        <div className="top-item">
          <FaPhoneAlt />
          <span>+254757840731</span>
        </div>

      </div>
    </div>
  );
};

export default TopHeader;