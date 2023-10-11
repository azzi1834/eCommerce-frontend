import React from "react";
import {
  MdPriceCheck,
  MdHome,
  MdOutlineTableChart,
  MdOutlineDeliveryDining,
  MdOutlineCurrencyExchange,
} from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaRecycle, FaTruckPickup } from "react-icons/fa";
import Styles from "../style.module.css";

function SupportCenter() {
  return (
    <>
      <div className="container p-4">
        <h2>xyz Support</h2>
        <p>
          <b>Sign in</b> for faster, better support
        </p>
      </div>

      <div className="container my-2 p-4">
        <h5>How can we help you?</h5>

        <div className="d-flex w-50">
          <input
            type="text "
            className="form-control rounded-0"
            placeholder="Seach help topics"
          />
          <button className="btn btn-outline-dark rounded-0">Search</button>
        </div>
      </div>

      <div className="container bg-light p-5">
        <h4>Popular support topics.</h4>

        <div className="row mt-2 gx-2 gy-2 ">
          <div className="col-3 border text-center p-3 bg-white">
            <MdPriceCheck className={Styles.icon} />
            <h6>Price Match Guarantee </h6>
          </div>
          <div className="col-3 border text-center p-3 bg-white ">
            <MdHome className={Styles.icon} />
            <h6>Prep for in home services</h6>
          </div>
          <div className="col-3 border text-center p-3 bg-white">
            <GrTransaction className={Styles.icon} />
            <h6>Trade in your device </h6>
          </div>
          <div className="col-3 border text-center p-3 bg-white">
            <FaRecycle className={Styles.icon} />
            <h6>Haul away and Recycling </h6>
          </div>
          <div className="col-3 border text-center p-3 bg-white">
            <MdOutlineTableChart className={Styles.icon} />
            <h6>Delayed Orders</h6>
          </div>
          <div className="col-3 border text-center p-3 bg-white">
            <MdOutlineDeliveryDining className={Styles.icon} />
            <h6>Fast & free delivery</h6>
          </div>
          <div className="col-3 border text-center p-3 bg-white">
            <MdOutlineCurrencyExchange className={Styles.icon} />
            <h6>Return & Exchanges</h6>
          </div>
          <div className="col-3 border text-center p-3 bg-white">
            <FaTruckPickup className={Styles.icon} />
            <h6>Order pickup Options </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportCenter;
