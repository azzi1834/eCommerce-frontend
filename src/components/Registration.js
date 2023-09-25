import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/authActions";
import { Formik, Form, Field, ErrorMessage, replace } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = await axios.post(
        `http://localhost:4000/api/user/verify-token`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (user.status === 200) {
        navigate("/login", { replace: true });
      }
    }
  };

  useEffect(() => {
    verifyToken();
    // dispatch(verifyToken());
  });

  const handleValidate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  return (
    <>
      <div className="container p-2 mt-3 mb-3 w-25">
        <h2 className="mb-3">Registration</h2>
        {error && <p className="error">{error}</p>}
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validate={handleValidate}
          onSubmit={(values) => {
            // console.log("before::", values);
            dispatch(register(values)).then(
              navigate("/login", { replace: true })
            );
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                type="text"
                name="firstName"
                placeholder="Enter your first Name"
                className="form-control"
              />
              <ErrorMessage name="firstName" component="div" />
              <br />
              <Field
                type="text"
                name="lastName"
                placeholder="Enter your last Name"
                className="form-control"
              />
              <ErrorMessage name="lastName" component="div" />
              <br />

              <Field
                type="email"
                name="email"
                placeholder="Enter email address"
                className="form-control"
              />
              <ErrorMessage name="email" component="div" />
              <br />

              <Field
                type="password"
                name="password"
                placeholder="Enter Password"
                className="form-control"
              />
              <ErrorMessage name="password" component="div" />
              <br />

              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>

              <p className="my-2">
                Already have an account?
                <span>
                  <Link to="/login" className="btn btn-dark">
                    Login
                  </Link>
                </span>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Registration;
