import React from "react";
import "./service.css";
const ServiceData = (props) => {
  return (
    <div>
      <div className={props.clName}>
        <div className="des-text">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <p>{props.text1}</p>
          <button className="service-btn">{props.btn}</button>
        </div>
        <div className="image-service">
          <img src={props.img1} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default ServiceData;
