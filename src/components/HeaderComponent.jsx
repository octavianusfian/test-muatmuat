import React from "react";
import "./HeaderComponent.css";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-between h-full ">
      <a className="logo" onClick={() => navigate("/")}></a>
      <div className=" flex items-center">
        <div className="font-medium text-lg text-blue-700">
          Let's Buy New Cases
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
