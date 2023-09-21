import React from "react";
import "./About.css";
export default function About() {
  return (
    <>
      <div className="about  bg-color">
        <div className="container ">
          <div className="text-center">
            <h1 className="text-uppercase text-white fw-bold">
              About Component
            </h1>
            <div className="d-flex align-items-center justify-content-center gap-2">
              <span className="header-span-about"></span>
              <i className="fa-solid fa-star text-white"></i>
              <span className="header-span-about"></span>
            </div>
          </div>
          <div className="row pt-5 px-5 text-white">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
