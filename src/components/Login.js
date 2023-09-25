import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const handleValidate = (values) => {
    const errors = {};
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

  const verifyToken = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = await axios.post(
        "http://localhost:4000/api/user/verify-token",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (user && user?.status === 200) {
        navigate("/dashboard", { replace: true });
      }
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <div className="container w-25 mt-3">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={handleValidate}
        onSubmit={(values) => {
          console.log("before::", values);
          dispatch(login(values)).then(
            navigate("/dashboard", { replace: true })
          );
        }}
      >
        {({ isSubmitting }) => (
          <Form>
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
              Not have an account?
              <span>
                <Link to="/register" className="btn btn-dark">
                  Register
                </Link>
              </span>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
