import React from "react";
import Products from "./Products";
import { Carousel } from "react-bootstrap";
import {
  FcApproval,
  FcShipped,
  FcMoneyTransfer,
  FcCheckmark,
} from "react-icons/fc";
import TopCategories from "./TopCategories";
import classes from "../style.module.css";

function Home() {
  return (
    <div className="container">
      <div className="row p-1">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 p-1">
          <Carousel indicators={false}>
            <Carousel.Item>
              <img
                style={{
                  height: "350px",
                  width: "100%",
                  objectFit: "cover",
                }}
                src="https://media.cybermart.com/BannerAssets/1693901496_banner.png"
                alt=":)"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "350px",
                  width: "100%",
                  objectFit: "cover",
                }}
                src="https://media.cybermart.com/BannerAssets/1685964028_banner.png"
                alt=":)"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "350px",
                  width: "100%",
                  objectFit: "cover",
                }}
                src="https://media.cybermart.com/BannerAssets/1685964028_banner.png"
                alt=":)"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={`col-md-4 col-lg-4 p-1 ${classes.hideSection}`}>
          <div>
            <img
              src="https://media.cybermart.com/BannerAssets/1693673352_banner.png"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            ></img>
          </div>
          <div className="mt-1">
            <img
              src="https://media.cybermart.com/BannerAssets/1693894237_banner.png"
              style={{ width: "100%", objectFit: "cover" }}
            ></img>
          </div>
        </div>
      </div>

      <div
        className="container row p-3 mt-3 "
        style={{ backgroundColor: "#e3e7ed", borderRadius: "10px" }}
      >
        <div className="col-3">
          <FcApproval style={{ height: "25px", width: "25px" }}></FcApproval>
          Safe Payment
        </div>
        <div className="col-3">
          <FcShipped style={{ height: "25px", width: "25px" }}></FcShipped>
          Nationwide Delivery
        </div>
        <div className="col-3">
          <FcMoneyTransfer style={{ height: "25px", width: "25px" }} />
          Best Price Guaranted
        </div>
        <div className="col-3">
          <FcCheckmark style={{ height: "25px", width: "25px" }} />
          100% Authentic Product
        </div>
      </div>

      <Products />
      <TopCategories />
    </div>
  );
}

export default Home;
