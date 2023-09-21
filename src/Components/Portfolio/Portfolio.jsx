import React, { useState } from "react";
import "./Portfolio.css";
import port1 from "./img/poert1.png";
import port2 from "./img/port2.png";
import port3 from "./img/port3.png";
export default function Portfolio() {
  const [img, setImg] = useState([
    { img: port1, id: "img1" },
    { img: port2, id: "img2" },
    { img: port3, id: "img3" },
    { img: port1, id: "img4" },
    { img: port2, id: "img5" },
    { img: port3, id: "img6" },
  ]);

  return (
    <>
      <div className="portfolio">
        <div className="container">
          <div className="text-center">
            <h1 className="text-uppercase dark-color fw-bold">
              Portfolio Component
            </h1>
            <div className="d-flex align-items-center justify-content-center gap-2">
              <span className="header-span"></span>
              <i className="fa-solid fa-star dark-color"></i>
              <span className="header-span"></span>
            </div>
          </div>
          <div className="row g-4 mt-2">
            {img.map((item) => {
              return (
                <>
                  <div className="col-md-4">
                    <div className="img-container">
                      <img
                        src={item.img}
                        alt="cake"
                        // id={item.id}
                        className="w-100"
                      />
                      {console.log(item.img, item.id)}
                      <div
                        data-bs-toggle="modal"
                        data-bs-target={"#" + item.id}
                        className="img-layout"
                      >
                        <i className="text-white fa-solid fa-plus fa-6x"></i>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            {img.map((item) => (
              <>
                <div
                  className="modal fade"
                  id={item.id}
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body ">
                        <img src={item.img} alt="cake" className="w-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <div className="img-container">
                <img src={port1} alt="cake" className="w-100" />
                <div className="img-layout">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div> */
}
