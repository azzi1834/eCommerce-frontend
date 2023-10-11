import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Carousel } from "react-bootstrap";
import Review from "./Review";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product() {
  const { id } = useParams(); //return obj in key/value pair
  const [product, setProduct] = useState([]);
  // const [product, setProduct] = useState([]);

  const getProduct = async () => {
    await axios
      .get(`http://localhost:4000/api/product/details/${id}`)
      .then((resp) => {
        setProduct(resp);
      });
  };

  const addToCart = async (values) => {
    const token = localStorage.getItem("token");
    console.log("values", values);
    try {
      const response = await axios.post(
        `http://localhost:4000/api/cart/${id}/add-to-cart`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // console.log("response", response.data);
      toast(response.data);
    } catch (error) {
      // console.log(error.message);
      toast(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="container">
        <ToastContainer />
        <div className="row">
          <div className="col-6 ">
            <Carousel data-bs-theme="dark" indicators={false}>
              {product?.data?.images?.map((path) => {
                return (
                  <Carousel.Item>
                    <img
                      style={{
                        height: "500px",
                        width: "100%",
                        objectFit: "cover",
                        padding: "3rem",
                      }}
                      src={`http://localhost:4000/${path}`}
                      alt=":)"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <div className="col-6 d-flex flex-column" style={{ padding: "5rem" }}>
            <h2>{product?.data?.dataValues?.name}</h2>
            <p>
              <b>category:</b> {product?.data?.dataValues?.category}
            </p>

            <p>{product?.data?.dataValues?.description}</p>
            <p>
              <b>price: </b>${product?.data?.dataValues?.price}
            </p>
            <div>
              <li
                onClick={() => {
                  addToCart({
                    quantity: 1,
                    price: product?.data?.dataValues?.price,
                  });
                }}
                className="btn btn-primary w-40"
              >
                Add to cart
              </li>
              <button className="btn btn-primary w-40 mx-2">whishlist</button>
            </div>
          </div>
        </div>
      </div>

      <Review />
    </>
  );
}

export default Product;
