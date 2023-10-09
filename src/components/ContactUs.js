import React from "react";
import Styles from "../style.module.css";

function ContactUs() {
  return (
    <div className="container d-flex mt-5 p-3">
      <div className="col-4">
        <img
          src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/ContactBlueShirt-113373.jpg"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-8">
        <h3>What can we help you with?</h3>
        <div className={`row gx-1 gy-1 ${Styles.contactDiv}`}>
          <div className="col-4 border p-5">
            <p>Order & Purchases</p>
          </div>

          <div className="col-4 border p-5">
            <p>Order & Purchases</p>
          </div>
          <div className="col-4 border p-5">
            <p>Order & Purchases</p>
          </div>
          <div className="col-4 border p-5">
            <p>Order & Purchases</p>
          </div>
          <div className="col-4 border p-5">
            <p>Order & Purchases</p>
          </div>
          <div className="col-4 border p-5">
            <p>Order & Purchases</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
