import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
  const user = useSelector((state) => state?.auth?.user);

  const userData = user?.data?.dataValues;
  console.log("user", userData);

  const [formType, setFormType] = useState("");
  const [data, setData] = useState(userData); //initialized with store values
  const [error, setError] = useState("");
  // const [statusCode, setStatusCode] = useState("");

  const nameSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "name must contain 3 letters")
      .required("Required"),

    lastName: Yup.string()
      .min(3, "name must contain 3 letters")
      .required("Required"),
  });

  const emailSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    confirmEmail: Yup.string()
      .email("Invalid email")
      .required("Required")
      .oneOf([Yup.ref("email")], "email does not match"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
      )
      .required("Required"),
  });

  const updateUser = async (values) => {
    const token = localStorage.getItem("token");

    const result = await axios.put(
      `http://localhost:4000/api/user/profile/${userData?.id}`,
      values,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (result.status === 200) {
      console.log("result", result?.data);
      setData(result?.data);
      toast("Username changes succesfully");
      setFormType("");
    }
  };

  const updateEmail = async (values) => {
    const token = localStorage.getItem("token");

    try {
      const result = await axios.put(
        `http://localhost:4000/api/user/change-email/${userData?.id}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("result", result?.data);
      setData(result?.data);
      toast("email changes succesfully");

      setFormType("");
    } catch (error) {
      // console.log(error.message);

      //extract status code from error message
      const statusCode = error.message.match(/\b\d{3}\b/);
      if (statusCode) {
        const status_code = parseInt(statusCode[0]);

        if (status_code === 404) {
          setError("Ops! Invalid Password. Try Again!");
        } else setError(error.message);
      }
    }
  };

  const changePassword = async (values) => {
    const token = localStorage.getItem("token");

    try {
      const result = await axios.put(
        `http://localhost:4000/api/user/change-password/${userData?.id}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("result", result?.data);
      setData(result?.data);
      toast("Password changes succesfully");
      setFormType("");
    } catch (error) {
      console.log(error.message);

      const statusCode = error.message.match(/\b\d{3}\b/);
      if (statusCode) {
        const status_code = parseInt(statusCode[0]);

        if (status_code === 404) {
          setError("Ops! Invalid Password. Try Again!");
        } else setError("Something went wrong. Try Again!");
      }
    }
  };

  const handleClick = () => {
    switch (formType) {
      case "name":
        return (
          <div className="container p-3 border">
            <h6>Edit your name</h6>
            <Formik
              initialValues={{ firstName: "", lastName: "" }}
              validationSchema={nameSchema}
              onSubmit={(values) => {
                console.log(values);
                updateUser(values);
              }}
            >
              <Form>
                <div className="row my-4">
                  <div className="form-group col-6">
                    <label>First Name</label>
                    <br />
                    <Field
                      className="form-control rounded-0 "
                      type="text"
                      name="firstName"
                    />
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="firstName"
                      component="div"
                    />
                  </div>

                  <div className="form-group col-6">
                    <label>Last Name</label>
                    <br />
                    <Field
                      type="text"
                      className="form-control rounded-0 "
                      name="lastName"
                    />
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="lastName"
                      component="div"
                    />
                  </div>
                </div>
                <div className="d-flex flex-row-reverse">
                  <button type="submit" className="btn btn-primary rounded-0">
                    Save
                  </button>
                  <li
                    onClick={() => setFormType("")}
                    className="btn btn-outline"
                  >
                    Cancel
                  </li>
                </div>
              </Form>
            </Formik>
          </div>
        );

      case "email":
        return (
          <div className="container border p-3">
            <h6>Edit your email address</h6>
            <p>
              After making this change, use your new email to sign into your
              account.
            </p>
            <Formik
              initialValues={{ email: "", confirmEmail: "", password: "" }}
              validationSchema={emailSchema}
              onSubmit={(values) => {
                updateEmail({ email: values.email, password: values.password });
                setError("");
              }}
            >
              <Form>
                <div className="my-4">
                  <div className="form-group ">
                    <label>New Email</label>
                    <br />
                    <Field
                      className="form-control rounded-0 w-75"
                      type="text"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </div>

                  <div className="form-group ">
                    <label>Confirm New Email</label>
                    <br />
                    <Field
                      type="text"
                      className="form-control rounded-0 h-100 w-75"
                      name="confirmEmail"
                    />
                    <ErrorMessage
                      name="confirmEmail"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </div>

                  <div className="form-group ">
                    <hr />
                    <label>Enter Current Password</label>
                    <br />
                    <Field
                      type="text"
                      className="form-control rounded-0 h-100 w-75"
                      name="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      style={{ color: "red" }}
                    />

                    {error ? (
                      <div>
                        <p style={{ paddingTop: "2px", color: "red" }}>
                          {error}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="d-flex flex-row-reverse">
                  <button type="submit" className="btn btn-primary rounded-0">
                    Save
                  </button>
                  <li
                    onClick={() => {
                      setFormType("");
                      setError("");
                    }}
                    className="btn btn-outline"
                  >
                    Cancel
                  </li>
                </div>
              </Form>
            </Formik>
          </div>
        );
      case "password":
        return (
          <div className="container border p-3">
            <h6>Edit your account password</h6>
            <p>
              After making this change, use your new password to sign into your
              account.
            </p>
            <Formik
              initialValues={{
                password: "",
                currentPassword: "",
                confirmPassword: "",
              }}
              onSubmit={(values) => {
                changePassword({
                  password: values.currentPassword,
                  newPassword: values.password,
                });
              }}
            >
              <Form>
                <div className="my-4">
                  <div className="form-group ">
                    <label>Current Password</label>
                    <br />

                    <Field
                      className="form-control rounded-0 h-100 w-75"
                      type="text"
                      name="currentPassword"
                    />
                    <ErrorMessage
                      name="currentPassword"
                      component="div"
                      style={{ color: "red" }}
                    />
                    <hr />
                  </div>

                  <div className="form-group ">
                    <label>New Password</label>
                    <br />
                    <Field
                      className="form-control rounded-0 h-100 w-75"
                      type="text"
                      name="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </div>

                  <div className="form-group ">
                    <label>Confirm New Password</label>
                    <br />
                    <Field
                      type="text"
                      className="form-control rounded-0 h-100 w-75"
                      name="confirmPassword"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      style={{ color: "red" }}
                    />

                    {error ? <p style={{ color: "red" }}>{error}</p> : null}
                  </div>
                </div>
                <div className="d-flex flex-row-reverse">
                  <button type="submit" className="btn btn-primary rounded-0">
                    Save
                  </button>
                  <li
                    onClick={() => setFormType("")}
                    className="btn btn-outline"
                  >
                    Cancel
                  </li>
                </div>
              </Form>
            </Formik>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div className="p-3">
      <ToastContainer></ToastContainer>
      <h4>
        <strong>Personal Details</strong>
      </h4>
      <p>Update your name, email, and account password at any time.</p>

      <div className="d-flex justify-content-between my-3">
        <div>
          <h6>Name: </h6>
          <p>
            {data?.firstName} {data?.lastName}
          </p>
        </div>
        <div>
          <li
            style={{ listStyle: "none", cursor: "pointer", color: "blue" }}
            onClick={() => setFormType("name")}
          >
            Edit
          </li>
        </div>
      </div>
      <div className="d-flex justify-content-between my-3  ">
        <div>
          <h6>Email: </h6>
          <p>{data?.email}</p>
        </div>
        <li
          style={{ listStyle: "none", cursor: "pointer", color: "blue" }}
          onClick={() => setFormType("email")}
        >
          Edit
        </li>
      </div>
      <div className="d-flex justify-content-between my-3  ">
        <div>
          <h6>Account Password</h6>
          <p>(First created on October 3, 2023)</p>
        </div>
        <li
          style={{ listStyle: "none", cursor: "pointer", color: "blue" }}
          onClick={() => setFormType("password")}
        >
          Edit
        </li>
      </div>

      <div>{handleClick()}</div>
    </div>
  );
}

export default Profile;
