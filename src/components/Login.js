import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    )
    .required("Required"),
});

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
        navigate("/", { replace: true });
      }
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <div className="container w-25 mt-3 border bg-white p-4">
      <h4 className="text-center ">Sign In</h4>

      {/* {error && <p className="error">{error}</p>} */}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          console.log("before::", values);
          dispatch(login(values)).then(navigate("/", { replace: true }));
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Field
              type="email"
              name="email"
              placeholder="Enter email address"
              className="form-control"
            />
            {errors.email && touched.email ? (
              <small style={{ color: "red" }}>{errors.email}</small>
            ) : null}
            <br />

            <Field
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control"
            />
            {errors.password && touched.password ? (
              <small style={{ color: "red" }}>{errors.password}</small>
            ) : null}

            <br />

            <button
              className="btn btn-primary w-100"
              type="submit"
              disabled={isSubmitting}
              style={{ backgroundColor: "#0046BE" }}
            >
              Submit
            </button>

            <hr />

            <p className="my-3" style={{ fontSize: "15px" }}>
              <b>Don't have an account?</b>{" "}
              <span>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  Create an account
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
