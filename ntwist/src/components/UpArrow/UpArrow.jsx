import React from "react";
import "./upArrow.css";
import { IoIosArrowUp } from "react-icons/io";


const UpArrow = () => {
  const handleArrow = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="up">
      <div className="arrow" onClick={handleArrow}>
        <IoIosArrowUp />
      </div>
    </div>
  );
};

export default UpArrow;
