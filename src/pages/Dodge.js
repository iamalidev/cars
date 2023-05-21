import React from "react";
import dodge from "../assets/img/dodge.webp";
import { Link } from "react-router-dom";

const Dodge = () => {
  return (
    <div className="dodge">
      <img className="dodge-img" src={dodge} alt="dodge" />
      <div className="cars-btn">
        <Link className="supra-btn" to="/supra">supra</Link>
        <Link className="dodge-btn dbtn" to="/dodge">dodge</Link>
        <Link className="lamborghini-btn" to="/lamborghini">lamborghini</Link>
        <Link className="ford-btn" to="/ford">ford</Link>
      </div>
    </div>
  );
};

export default Dodge;
