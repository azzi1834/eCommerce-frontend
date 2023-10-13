import React, { useEffect, useState } from "react";
import Styles from "../dashboard.module.css";
import { IoMdAdd } from "react-icons/io";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Addresses() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

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

    console.log("got data", response.data);
    setData(response.data);
  };

  const saveAddress = async (formData) => {
    const response = await axios.post(
      "http://localhost:4000/api/user/save-address",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      toast("saved succesfully ");
      setData(response.data);
    }
  };

  useEffect(() => {
    getAddresses();
  }, []);

  return (
    <>
      <div className="p-3">
        <ToastContainer />
        <h4>
          <strong>Addresses</strong>
        </h4>
        <p>Add your preferred addresses and choose a favourite.</p>
        <div>
          {data.length === 0 ? (
            <p>
              <b>You have no saved shipping addresses.</b>
            </p>
          ) : (
            <div>
              <p>
                <b>You have {data.length} saved shipping addresses.</b>
              </p>
              {data &&
                data.map((dta) => {
                  return (
                    <div className="card my-3 p-3 d-flex flex-row justify-content-between">
                      <div>
                        <h6>{dta?.name}</h6>
                        <p>{dta?.contactNumber}</p>
                        <p>
                          {dta?.address} {dta?.city} {dta?.province}
                        </p>
                      </div>
                      <div>
                        <a href="#">Edit</a>
                        <br />
                        <a href="#">Delete</a>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}

          {!isSubmitted ? (
            <li
              style={{ listStyle: "none" }}
              onClick={() => setIsSubmitted(true)}
            >
              <div className={`container ${Styles.addAddress}`}>
                <p>
                  <IoMdAdd className={Styles.iconSize} />
                  Add a new address
                </p>
              </div>
            </li>
          ) : (
            <div className="container p-3">
              <h6>Add a new address</h6>
              <Formik
                onSubmit={(formData) => {
                  console.log("formData", formData);
                  saveAddress(formData);
                  // setData((prevData) => [...prevData, formData]);
                  setIsSubmitted(false);
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
                    <div className="container border p-3">
                      <div className="row">
                        <div className="col-6 p-2">
                          <div className="form-group">
                            <label>Full Name</label>
                            <br />
                            <Field
                              type="text"
                              className="form-control"
                              name="name"
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
                              type="tel"
                              name="number"
                              className="form-control"
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
                              className="form-control"
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
                              type="text"
                              name="city"
                              className="form-control"
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
                              type="text"
                              name="address"
                              className="form-control"
                            />
                            <ErrorMessage
                              style={{ color: "red" }}
                              name="address"
                              component="div"
                            />
                          </div>
                          <div className="dropdown">
                            <Field
                              as="select"
                              name="addressType"
                              className="form-select mt-4"
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
                        <li
                          onClick={() => {
                            setIsSubmitted(false);
                          }}
                          className="btn btn-outline-dark mx-2 mt-2 rounded-0"
                        >
                          Cancel
                        </li>
                        <button
                          type="submit"
                          className="btn btn-primary mt-2 rounded-0"
                          disabled={isSubmitting}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Addresses;
