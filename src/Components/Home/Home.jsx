import React from "react";
import "./Home.css";
import imgHome from "./img/avataaars.svg";
export default function Home() {
  return (
    <>
      <div className="home  bg-color">
        <div className="container ">
          <div className="text-center">
            <img src={imgHome} className="w-25 mb-4" alt="" />
            <h1 className="text-uppercase text-white fw-bold mb-3">
              Start framework
            </h1>
            <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
              <span className="header-span-about"></span>
              <i className="fa-solid fa-star text-white"></i>
              <span className="header-span-about"></span>
            </div>
            <p className="text-white">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
