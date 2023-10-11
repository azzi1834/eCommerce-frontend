import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Style from "../products.module.css";

function Products() {
  const [data, setData] = useState([]);

  var setting = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  //   const [loading, setLoading] = useState(false);

  const dislayProducts = async () => {
    const products = await axios.get("http://localhost:4000/api/product/list");
    // console.log(products?.data);
    setData(products?.data);
  };

  useEffect(() => {
    dislayProducts();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h5 className=" border-bottom">Recently Added</h5>
        <div className="container">
          <div className="row">
            {data &&
              data.map((dta) => {
                return (
                  <div
                    key={dta?.dataValues?.id}
                    className="col-lg-3 col-md-4 col-sm-4 col-6"
                  >
                    <Link
                      to={`/products/${dta?.dataValues?.id}`}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Card
                        className="text-center mt-3"
                        style={{ width: "auto", borderRadius: " 0px" }}
                      >
                        <Card.Img
                          style={{ objectFit: "cover", borderRadius: "0px" }}
                          variant="top"
                          src={`http://localhost:4000/${dta.images[0]}`}
                          height={"250rem"}
                          width={"auto"}
                        />
                        <Card.Body>
                          <Card.Title
                            style={{
                              fontWeight: "normal",
                              color: "black",
                              fontSize: "15px",
                            }}
                          >
                            {dta?.dataValues?.name.length > 35
                              ? `${dta?.dataValues?.name.substring(0, 35)}...`
                              : dta?.dataValues?.name}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className={`container row ${Style.bestDeals}`}>
        <div className="col-3 d-flex flex-column justify-content-around underDiv">
          <img
            src="https://pisces.bbystatic.com/image2/vector/BestBuy_US/dam/MyBestBuy_Memberships_VT-6b4c46f5-c44b-4283-bc8e-92cfb0419b70.svg"
            className={Style.bestDealsLogo}
          ></img>
          <h3>Don't miss out on the best deals</h3>
          <p>
            Unlock even more exclusive member deals when you become a My Best
            Buy Plus™ or My xyz Total™ member.
          </p>
        </div>

        {data &&
          data.slice(0, 3).map((dta) => {
            return (
              <div className="col-3 " key={dta?.dataValues?.id}>
                <Link
                  to={`/products/${dta?.dataValues?.id}`}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Card
                    className="text-center p-2"
                    style={{ width: "auto", borderRadius: " 0px" }}
                  >
                    <Card.Img
                      style={{ objectFit: "cover", borderRadius: "0px" }}
                      variant="top"
                      src={`http://localhost:4000/${dta.images[0]}`}
                      height={"250rem"}
                      width={"auto"}
                    />
                    <Card.Body>
                      <Card.Title
                        style={{
                          fontWeight: "normal",
                          color: "black",
                          fontSize: "15px",
                        }}
                      >
                        {dta?.dataValues?.name.length > 20
                          ? `${dta?.dataValues?.name.substring(0, 20)}...`
                          : dta?.dataValues?.name}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            );
          })}
      </div>

      <div className="row mt-2 mb-5">
        <div
          className="col-4 d-flex justify-content-center align-items-center"
          style={{ borderRight: "1px solid black" }}
        >
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-vpe-freeshippin_der1-206853.png;maxHeight=160;maxWidth=160"
            style={{ height: "60px", width: "60px" }}
          ></img>
          <div>
            <h6>Free shipping</h6>
            <p> on orders $35 and up</p>
          </div>
        </div>
        <div
          className="col-4 d-flex justify-content-center align-items-center"
          style={{ borderRight: "1px solid black" }}
        >
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-34525-app-vpe-storepickup1-206866.png;maxHeight=160;maxWidth=160"
            style={{ height: "60px", width: "60px" }}
          ></img>
          <div>
            <h6>Ready in one hour</h6>
            <p>with Store Pickup.</p>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=160;maxWidth=160"
            style={{ height: "60px", width: "60px" }}
          ></img>
          <div>
            <h6>Same-day delivery.</h6>
          </div>
        </div>
      </div>

      <div className="container">
        <h5 className=" border-bottom">
          Trending Now <span style={{ fontWeight: "normal" }}>(6 items)</span>
        </h5>

        <Slider {...setting}>
          {data &&
            data?.slice(0, 6).map((dta) => {
              return (
                <div key={dta?.dataValues?.id}>
                  <Link
                    to={`/products/${dta?.dataValues?.id}`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Card
                      className="text-center m-3 p-3"
                      style={{ width: "auto", borderRadius: " 0px" }}
                    >
                      <Card.Img
                        style={{ objectFit: "cover", borderRadius: "0px" }}
                        variant="top"
                        src={`http://localhost:4000/${dta.images[0]}`}
                        height={"250rem"}
                        width={"auto"}
                      />
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontWeight: "normal",
                            color: "black",
                            fontSize: "15px",
                          }}
                        >
                          {dta?.dataValues?.name.length > 35
                            ? `${dta?.dataValues?.name.substring(0, 35)}...`
                            : dta?.dataValues?.name}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              );
            })}
        </Slider>
      </div>
    </>
  );
}

export default Products;
