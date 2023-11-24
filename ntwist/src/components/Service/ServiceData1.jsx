import React from "react";
import "./service.css";
const ServiceData1 = (props) => {
  return (
    <div>
      <div className={props.clName}>
        <div className="image-service">
          <img src={props.img1} alt="img" />
        </div>
        <div className="des-text">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <p>{props.text1}</p>
          <button className="service-btn">{props.btn}</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceData1;
