import React from "react";
import lamborghini from "../assets/img/lamborghini.webp";
import { Link } from "react-router-dom";

const Lamborghini = () => {
  return (
    <div className="lamborghini">
      <img className="lamborghini-img" src={lamborghini} alt="lamborghini" />
      <div className="cars-btn">
        <Link className="supra-btn" to="/supra">supra</Link>
        <Link className="dodge-btn" to="/dodge">dodge</Link>
        <Link className="lamborghini-btn lbtn" to="/lamborghini">lamborghini</Link>
        <Link className="ford-btn" to="/ford">ford</Link>
      </div>
    </div>
  );
};

export default Lamborghini;
