import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";

function CartPage() {
  const [data, setData] = useState([]);
  const [quantitiy, setQuantity] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
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

    const [cost, ...content] = response?.data;
    console.log(content);
    setData(content);
    setTotalCost(cost);
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

  const removeItem = async (id) => {
    console.log("id", id);
    const response = await axios.delete(
      `http://localhost:4000/api/cart/${id}/remove-item`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      toast("item removed succesfully");
      setData(response?.data);
      console.log(response);
    }
  };

  const updateCart = async (id, newQuantity) => {
    const response = await axios.put(
      `http://localhost:4000/api/cart/${id}/update-cart`,
      { quantity: newQuantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response) {
      // toast("update succesfully");
      // setData(response?.data);
      console.log(response);
      console.log("updated");
      setQuantity(newQuantity);
    } else {
      console.log("error");
    }
  };

  // const handleDecrement = (id, qty) => {
  //   if (qty <= 1) {
  //     qty = 1;
  //   }

  //   updateCart(id, qty);
  // };

  useEffect(() => {
    getCartContent();
  }, [quantitiy]);

  return (
    <div className="container p-3">
      <ToastContainer />
      <h4>Your Cart</h4>

      {data?.length > 0 ? (
        <div className="row">
          <div className="col-9 ">
            <div className="d-flex justify-content-between mt-1">
              <p>{data.length} item(s) in cart</p>
              <li
                style={{ listStyle: "none", cursor: "pointer", color: "" }}
                onClick={emptyCart}
              >
                <RiDeleteBin6Line />
                Empty Cart
              </li>
            </div>
            <div className="p-1">
              {data &&
                data.map((item) => {
                  return (
                    <div key={item?.id} className="row border my-1 p-3">
                      <div className="col-md-7">
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

                        <li
                          style={{ listStyle: "none", cursor: "pointer" }}
                          onClick={() => removeItem(item?.product?.id)}
                        >
                          <RiDeleteBin6Line />
                        </li>
                      </div>

                      <div className="col-md-3 d-flex align-items-center">
                        <button
                          onClick={() =>
                            updateCart(item?.product?.id, item?.quantity + 1)
                          }
                          className="btn btn-outline-primary rounded-0"
                        >
                          +
                        </button>
                        <input
                          className="text-center form-control rounded-0 w-25"
                          // style={{ width: "25%" }}
                          value={item?.quantity}
                        ></input>
                        <button
                          disabled={quantitiy < 2}
                          onClick={() =>
                            updateCart(item?.product?.id, item?.quantity - 1)
                          }
                          className="btn btn-outline-primary rounded-0"
                        >
                          -
                        </button>
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
          <div className="col-3 p-1">
            <div className="border p-3">
              <h6>Order Summary</h6>
              <div className="d-flex justify-content-between mt-3">
                <p>Subtotal</p>
                Rs. {totalCost}
              </div>
              <div className="d-flex justify-content-between">
                <p>Shipping Fee:</p>
                Rs. 0
              </div>

              <form>
                <div className="form-group d-flex justify-content-between">
                  <input
                    type="text"
                    placeholder="Enter Voucher Code"
                    className="form-control rounded-0"
                  ></input>
                  <button type="submit" className="btn btn-primary rounded-0">
                    APPLY
                  </button>
                </div>
              </form>
              <div className="d-flex justify-content-between mt-3">
                <p>Total </p>
                <p>Rs. {totalCost}</p>
              </div>
              <Link to="/checkout" className="btn rounded-0 btn-primary w-100">
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
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
