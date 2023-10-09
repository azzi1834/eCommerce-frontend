import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/authActions";
import { Formik, Form, Field, ErrorMessage, replace } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const registrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long!")
    .required("Required"),

  lastName: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    )
    .required("Required"),
});

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, user } = useSelector((state) => state.auth);

  if (!user && !error) {
    navigate("/login");
  }

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
    // verifyToken();
    // dispatch(verifyToken());
  });

  return (
    <>
      <div className="container-fluid w-25 mt-3 border bg-white p-4">
        <h4 className="text-center">Create an Account</h4>
        {/* {error && <p className="error">{error}</p>} */}
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={registrationSchema}
          onSubmit={(values, action) => {
            console.log("values onsubmit::", values);
            // dispatch(register(values)).then(
            //   navigate("/login", { replace: true })
            // );

            dispatch(register(values));
            action.resetForm();
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <Field
                type="text"
                name="firstName"
                placeholder="Enter your first Name"
                className="form-control"
              />

              {errors.firstName && touched.firstName ? (
                <small style={{ color: "red" }}>{errors.firstName}</small>
              ) : null}
              <br />
              <Field
                type="text"
                name="lastName"
                placeholder="Enter your last Name"
                className="form-control"
              />

              {errors.lastName && touched.lastName ? (
                <small style={{ color: "red" }}>{errors.lastName}</small>
              ) : null}
              <br />

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
                className="btn w-100 btn-primary"
                type="submit"
                disabled={isSubmitting}
                style={{ backgroundColor: "#0046BE" }}
              >
                Submit
              </button>

              <hr />
              <p className="my-3" style={{ fontSize: "15px" }}>
                <b>Already have an account?</b>{" "}
                <span>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Login
                  </Link>
                </span>
              </p>
            </Form>
          )}
        </Formik>
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
};

export default Registration;
