import React from "react";
import supra from "../assets/img/supra.webp";
import { Link } from "react-router-dom";

const Supra = () => {
  return (
    <div className="supra">
      <img className="supra-img" src={supra} alt="supra" />
      <div className="cars-btn">
        <Link className="supra-btn sbtn" to="/supra">supra</Link>
        <Link className="dodge-btn" to="/dodge">dodge</Link>
        <Link className="lamborghini-btn" to="/lamborghini">lamborghini</Link>
        <Link className="ford-btn" to="/ford">ford</Link>
      </div>
    </div>
  );
};

export default Supra;
