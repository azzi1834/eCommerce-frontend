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
  const [quantity, setQuantity] = useState(1);
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

  const incrementQuantity = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
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
              <b>price: </b>Rs. {product?.data?.dataValues?.price}
            </p>

            <div className="col-md-3 d-flex align-items-center">
              <button
                className="btn btn-outline-primary rounded-0"
                onClick={incrementQuantity}
              >
                +
              </button>
              <input
                className="text-center form-control rounded-0"
                value={quantity}
              ></input>

              <button
                disabled={quantity < 2}
                onClick={decrementQuantity}
                className="btn btn-outline-primary rounded-0"
              >
                -
              </button>
            </div>

            <div className="my-3">
              <li
                onClick={() => {
                  addToCart({
                    quantity,
                    price: product?.data?.dataValues?.price,
                  });
                }}
                className="btn btn-primary rounded-0"
              >
                Add to cart
              </li>
              <li className="btn btn-primary mx-2 rounded-0">whishlist</li>
            </div>
          </div>
        </div>
      </div>

      <Review />
    </>
  );
}

export default Product;
