import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";

function CartPage() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  const getCartContent = async () => {
    const response = await axios.get(
      "http://localhost:4000/api/cart/view-cart",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response?.data);
    setData(response?.data);
  };

  const emptyCart = async () => {
    const response = await axios.delete(
      "http://localhost:4000/api/cart/clear-cart",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response) {
      toast(response.data);
      setData("");
    }
  };

  useEffect(() => {
    getCartContent();
  }, []);

  return (
    <div className="container p-3">
      <ToastContainer />
      <h4>shopping CartPage</h4>

      {data?.length > 0 ? (
        <div className="row">
          <div className="col-9">
            <div className="d-flex justify-content-between my-2">
              <p>{data.length} items</p>
              <li onClick={emptyCart}>
                <RiDeleteBin6Line />
                Empty Cart
              </li>
            </div>
            <div className="p-3">
              {data &&
                data.map((item) => {
                  return (
                    <div key={item?.id} className="row border my-2 p-3">
                      <div className="col-md-8">
                        <h6>{item?.product?.name}</h6>
                        <small>{item?.product?.category}</small>
                      </div>

                      <div className="col-md-2">
                        <h6>Rs. {item?.product?.price}</h6>
                        <h6
                          style={{
                            textDecoration: "line-through",
                            color: "grey",
                          }}
                        >
                          Rs. {item?.product?.price + 50}
                        </h6>
                        <RiDeleteBin6Line />
                      </div>

                      <div className="col-md-2">
                        <button>+</button>
                        <input
                          style={{ width: "50%" }}
                          value={item?.quantity}
                        ></input>
                        <button>-</button>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="row">
              <Link to="/">
                <AiOutlineArrowLeft />
                continue shopping
              </Link>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      ) : (
        <div className="text-center p-3">
          <p>There is no product in the cart</p>

          <Link to="/" className="btn btn-outline-dark rounded-0">
            continue shopping
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
