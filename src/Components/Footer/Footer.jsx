import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer bg-dark-color py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 py-4">
              <h3 className="text-white text-uppercase">Location</h3>
              <p className="text-white">2215 John Daniel Drive</p>
              <p className="text-white">Clark, MO 65243</p>
            </div>
            <div className="col-md-4 py-4">
              <h3 className="text-white text-uppercase">AROUND THE WEB</h3>
              <div className="text-white d-flex justify-content-center ">
                <i className="fa-brands fa-facebook mx-1 border border-1 p-2   rounded-circle"></i>
                <i className="fa-brands fa-twitter mx-1  border border-1  p-2 rounded-circle"></i>
                <i className="fa-brands fa-linkedin-in mx-1  border border-1 p-2  rounded-circle"></i>
                <i className="fa-solid fa-globe mx-1 border border-1  p-2  rounded-circle"></i>
              </div>
            </div>
            <div className="col-md-4 py-4">
              <h3 className="text-white text-uppercase">ABOUT FREELANCER</h3>
              <p className="text-white">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 bg-dark text-white text-center ">
        <p className="mb-0">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
