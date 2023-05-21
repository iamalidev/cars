import React from "react";
import ford from "../assets/img/ford.webp";
import { Link } from "react-router-dom";

const Ford = () => {
  return (
    <div className="ford">
      <img className="ford-img" src={ford} alt="ford" />
      <div className="cars-btn">
        <Link className="supra-btn" to="/supra">supra</Link>
        <Link className="dodge-btn" to="/dodge">dodge</Link>
        <Link className="lamborghini-btn" to="/lamborghini">lamborghini</Link>
        <Link className="ford-btn fbtn" to="/ford">ford</Link>
      </div>
    </div>
  );
};

export default Ford;
