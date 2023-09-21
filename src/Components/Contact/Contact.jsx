import React from "react";
import "./Contact.css";
export default function Contact() {
  function callLable() {
    let inputs = document.querySelectorAll("input");
    let inputsLabel = document.querySelectorAll(".form-label-p");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("change", () => {
        console.log("Input");
        for (let i = 0; i < inputsLabel.length; i++) {
          inputsLabel[i].classList.toggle("form-label-p");
          console.log("Label");
        }
      });
    }
  }
  function callLable2() {
    // let inputs = document.querySelectorAll("input");
    let inputsLabel = document.querySelector(".form-label-p");
    inputsLabel.classList.toggle("form-label-p");
    console.log("Label");
  }

  return (
    <>
      <div className="contact contact-container">
        <div className="text-center">
          <h1 className="text-uppercase dark-color fw-bold">contact Section</h1>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <span className="header-span"></span>
            <i className="fa-solid fa-star dark-color"></i>
            <span className="header-span"></span>
          </div>
        </div>
        <div class="mb-3">
          <label
            for="exampleFormControlInput1"
            onKeyDown={() => {
              callLable2();
            }}
            class="form-label"
          >
            <p className="form-label-p">userName:</p>
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="userName"
          />
          <label for="exampleFormControlInput2" class="form-label">
            <p className="form-label-p">userAge:</p>
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="userAge"
          />
          <label for="exampleFormControlInput3" class="form-label">
            <p className="form-label-p">userEmail:</p>
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput3"
            placeholder="userEmail"
          />
          <label for="exampleFormControlInput4" class="form-label">
            <p className="form-label-p">userPassword:</p>
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput4"
            placeholder="userPassword"
          />
        </div>
        <button className="btn btn-color">Send message</button>
      </div>
    </>
  );
}
