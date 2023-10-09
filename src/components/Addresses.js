import React, { useState } from "react";
import Styles from "../dashboard.module.css";
import { IoMdAdd } from "react-icons/io";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Addresses() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState([]);
  console.log("data", data);

  console.log(isSubmitted);
  return (
    <>
      <div className="p-3">
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
                        <h4>
                          {dta?.first_name}
                          {dta?.country}
                        </h4>
                        <p>{dta?.phone_number}</p>
                        <p>
                          {dta?.province} {dta?.postal_code}
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
            <div className="container p-3 border">
              <h6>Add a new address</h6>
              <Formik
                onSubmit={(formData) => {
                  setData((prevData) => [...prevData, formData]);
                  setIsSubmitted(false);
                }}
                initialValues={{
                  first_name: "",
                  last_name: "",
                  phone_number: "",
                  address: "",
                  city: "",
                  province: "",
                  postal_code: "",
                  country: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.first_name) {
                    errors.first_name = "Required";
                  }
                  if (!values.last_name) {
                    errors.last_name = "Required";
                  }
                  if (!values.phone_number) {
                    errors.phone_number = "Required";
                  }
                  if (!values.address) {
                    errors.address = "Required";
                  }
                  if (!values.city) {
                    errors.city = "Required";
                  }
                  if (!values.province) {
                    errors.province = "Required";
                  }
                  if (!values.postal_code) {
                    errors.postal_code = "Required";
                  }
                  if (!values.country) {
                    errors.country = "Required";
                  }

                  return errors;
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="container">
                      <div className="row">
                        <div className="col-6">
                          <div className="form-group">
                            <label>First Name</label>
                            <br />
                            <Field
                              type="text"
                              className="form-control"
                              name="first_name"
                            />
                            <ErrorMessage name="first_name" component="div" />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            <label>Last Name</label>
                            <br />
                            <Field
                              type="text"
                              name="last_name"
                              className="form-control"
                            />
                            <ErrorMessage name="last_name" component="div" />
                          </div>
                        </div>
                        <div className="col-6 mt-2">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <Field
                              type="tel"
                              name="phone_number"
                              className="form-control"
                            />
                            <ErrorMessage name="phone_number" component="div" />
                          </div>
                        </div>
                        <div className="col-12 mt-2">
                          <div className="form-group">
                            <label>Address</label>
                            <Field
                              type="text"
                              name="address"
                              className="form-control"
                            />
                            <ErrorMessage name="address" component="div" />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group mt-2">
                            <label>City</label>
                            <Field
                              type="text"
                              name="city"
                              className="form-control"
                            />
                            <ErrorMessage name="city" component="div" />
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="form-group mt-2">
                            <label>Province</label>
                            <Field
                              as="select"
                              name="province"
                              className="form-control"
                            >
                              <option value="Alberta">Alberta</option>
                              <option value="BritishColumbia">
                                British Columbia
                              </option>
                              <option value="Manitoba">Manitoba</option>
                              <option value="Nunavt">Nunavt</option>
                              <option value="Ontario">Ontario</option>
                              <option value="Quebec">Quebec</option>
                              <option value="Yukon">Yukon</option>
                              <option value="Saskatchewan">Saskatchewan</option>
                              <option value="NovaScotia">Nova Scotia</option>
                            </Field>
                            <ErrorMessage name="province" component="div" />
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="form-group mt-2">
                            <label>Postal Code</label>
                            <Field
                              type="text"
                              className="form-control"
                              name="postal_code"
                            />
                            <ErrorMessage name="postal_code" component="div" />
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="form-group mt-2">
                            <label>Country</label>
                            <Field
                              type="text"
                              className="form-control"
                              name="country"
                            />
                            <ErrorMessage name="country" component="div" />
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="btn btn-primary mt-2"
                            disabled={isSubmitting}
                          >
                            Submit
                          </button>
                        </div>
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
