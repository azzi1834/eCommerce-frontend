import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Style from "../style.module.css";

function Checkout() {
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState({});
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  const [totalCost, setTotalCost] = useState(0);
  const [newAddress, setNewAddress] = useState(false);

  const getAddresses = async () => {
    const response = await axios.get(
      "http://localhost:4000/api/user/get-addresses",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("addresses", response.data);
    setAddresses(response.data);
  };

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
    console.log("cart content", content);
    setData(content);
    setTotalCost(cost);
  };

  const handleOnChange = (id) => {
    console.log("id", id);
    //addresses is an array of objects
    addresses.forEach((address) => {
      if (address.id == id) {
        setNewAddress(false);

        setAddress(address);
      } else if (id == "newAddress") {
        setNewAddress(true);
      }
    });
  };

  useEffect(() => {
    getAddresses();
    getCartContent();
  }, []);
  return (
    <>
      <div className="container p-3">
        <div className="row">
          <h4>Checkout</h4>
          <div className="col-8">
            <div className="my-3">
              <Formik
                initialValues={{ address: "" }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form
                  onChange={(e) => {
                    handleOnChange(e.target.value);
                  }}
                >
                  <Field
                    as="select"
                    name="address"
                    className="form-select"
                    style={{ height: "3rem " }}
                  >
                    <option value="" disabled selected>
                      Select Address
                    </option>

                    {addresses &&
                      addresses.map((address) => {
                        return (
                          <option key={address.id} value={address.id}>
                            {address.address} {address.city} {address.province}
                          </option>
                        );
                      })}
                    <option value="newAddress">New Address</option>
                  </Field>
                </Form>
              </Formik>
            </div>

            <Formik
              onSubmit={(values) => {
                console.log("formData", values);
              }}
              initialValues={{
                name: "",
                number: "",
                province: "",
                city: "",
                address: "",
                addressType: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Required";
                }
                if (!values.number) {
                  errors.number = "Required";
                }
                if (!values.province) {
                  errors.province = "Required";
                }
                if (!values.city) {
                  errors.city = "Required";
                }
                if (!values.address) {
                  errors.address = "Required";
                }
                if (!values.addressType) {
                  errors.addressType = "Required";
                }

                return errors;
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="container border p-4">
                    {newAddress ? <h6>Add new Address details</h6> : ""}
                    <div className={`row ${Style.checkoutForm}`}>
                      <div className="col-6 p-2">
                        <div className="form-group">
                          <label>Full Name</label>
                          <br />
                          <Field
                            disabled={!newAddress}
                            type="text"
                            className="form-control"
                            name="name"
                            value={!newAddress ? address.name : undefined}
                          />
                          <ErrorMessage
                            style={{ color: "red" }}
                            name="name"
                            component="div"
                          />
                        </div>
                        <div className="form-group">
                          <label>Phone Number</label>
                          <Field
                            disabled={!newAddress}
                            type="tel"
                            name="number"
                            className="form-control"
                            value={
                              !newAddress ? address.contactNumber : undefined
                            }
                          />
                          <ErrorMessage
                            style={{ color: "red" }}
                            name="number"
                            component="div"
                          />
                        </div>
                        <div className="form-group">
                          <label>Province</label>
                          <Field
                            type="tel"
                            name="province"
                            disabled={!newAddress}
                            className="form-control"
                            value={!newAddress ? address.province : undefined}
                          />
                          <ErrorMessage
                            style={{ color: "red" }}
                            name="province"
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-6 p-2">
                        <div className="form-group">
                          <label>City</label>
                          <Field
                            disabled={!newAddress}
                            type="text"
                            name="city"
                            className="form-control"
                            value={!newAddress ? address.city : undefined}
                          />
                          <ErrorMessage
                            style={{ color: "red" }}
                            name="city"
                            component="div"
                          />
                        </div>
                        <div className="form-group">
                          <label>Address</label>
                          <Field
                            disabled={!newAddress}
                            type="text"
                            name="address"
                            className="form-control"
                            value={!newAddress ? address.address : undefined}
                          />
                          <ErrorMessage
                            style={{ color: "red" }}
                            name="address"
                            component="div"
                          />
                        </div>
                        <div className="dropdown">
                          <label>Shipping/Billing Address</label>
                          <Field
                            disabled={!newAddress}
                            as="select"
                            name="addressType"
                            className="form-select"
                            value={
                              !newAddress ? address.addressType : undefined
                            }
                          >
                            <option value="" disabled selected>
                              Select Address Type
                            </option>

                            <option value="shipping_address">
                              Shipping Address
                            </option>
                            <option value="billing_address">
                              Billing Address
                            </option>
                          </Field>
                          <ErrorMessage
                            style={{ color: "red" }}
                            name="addressType"
                            component="div"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      {/* <li
                        onClick={() => {
                          setIsSubmitted(false);
                        }}
                        className="btn btn-outline-dark mx-2 mt-2 rounded-0"
                      >
                        Cancel
                      </li> */}

                      {/* <button
                        type="submit"
                        className="btn btn-primary mt-2 rounded-0"
                        disabled={isSubmitting}
                      >
                        Save
                      </button> */}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-4">
            <div className={Style.itemsSection}>
              {data &&
                data.map((item) => {
                  return (
                    <div key={item?.id} className="row border my-2 p-3">
                      <div className="col-md-8">
                        <p>{item?.product?.name}</p>
                      </div>

                      <div className="col-md-2">
                        <p>Qty: {item?.quantity}</p>
                      </div>
                      <div className="col-md-2">
                        <p>Rs. {item?.product?.price}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="border p-3">
              <h6>Order Summary</h6>
              <div className="d-flex justify-content-between mt-3">
                <p>Items Total</p>
                Rs. {totalCost} {/* <p>Shipping Fee: </p> */}
              </div>

              <div className="d-flex justify-content-between ">
                <p>Delivery Fee</p>
                <p>Rs. 100</p>
              </div>

              <div className="d-flex justify-content-between ">
                <p>Total Payment </p>
                <p>Rs. {totalCost + 100}</p>
              </div>
              <Link to="" className="btn rounded-0 btn-primary w-100">
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
