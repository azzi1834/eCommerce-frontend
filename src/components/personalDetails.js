import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Profile() {
  const user = useSelector((state) => state?.auth?.user);
  console.log("user", user);
  const userData = user?.data?.dataValues;

  const [formType, setFormType] = useState("");

  // const changeFormType = (type) => {
  //   setFormType(type);
  // };

  const handleClick = () => {
    switch (formType) {
      case "name":
        return (
          <div className="container p-3">
            <h6>Edit your name</h6>
            <Formik
              initialValues={{ first_name: "", last_name: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.first_name) {
                  errors.first_name = "Required";
                }
                if (!values.last_name) {
                  errors.last_name = "Required";
                }
                return errors;
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
                      name="first_name"
                    />
                    <ErrorMessage name="first_name" component="div" />
                  </div>

                  <div className="form-group col-6">
                    <label>Last Name</label>
                    <br />
                    <Field
                      type="text"
                      className="form-control rounded-0 "
                      name="last_name"
                    />
                    <ErrorMessage name="first_name" component="div" />
                  </div>
                </div>
                <div className="d-flex flex-row-reverse">
                  <button className="btn btn-primary rounded-0">Save</button>
                  <button className="btn btn-outline">Cancel</button>
                </div>
              </Form>
            </Formik>
          </div>
        );

      case "email":
        return (
          <div className="container p-3">
            <h6>Edit your email address</h6>
            <p>
              After making this change, use your new email to sign into your
              account.
            </p>
            <Formik>
              <Form>
                <div className="my-4">
                  <div className="form-group ">
                    <label>New Email</label>
                    <br />
                    <Field
                      className="form-control rounded-0 w-75"
                      type="text"
                      name="first_name"
                    />
                    <ErrorMessage name="first_name" component="div" />
                  </div>

                  <div className="form-group ">
                    <label>Confirm New Email</label>
                    <br />
                    <Field
                      type="text"
                      className="form-control rounded-0 h-100 w-75"
                      name="first_name"
                    />
                    <ErrorMessage name="first_name" component="div" />
                  </div>
                </div>
                <div className="d-flex flex-row-reverse">
                  <button className="btn btn-primary rounded-0">Save</button>
                  <button className="btn btn-outline">Cancel</button>
                </div>
              </Form>
            </Formik>
          </div>
        );
      case "password":
        return (
          <div className="container p-3">
            <h6>Edit your account password</h6>
            <p>
              After making this change, use your new password to sign into your
              account.
            </p>
            <Formik>
              <Form>
                <div className="my-4">
                  <div className="form-group ">
                    <label>New Password</label>
                    <br />
                    <Field
                      className="form-control rounded-0 h-100 w-75"
                      type="text"
                      name="first_name"
                    />
                    <ErrorMessage name="first_name" component="div" />
                  </div>

                  <div className="form-group ">
                    <label>Confirm New Password</label>
                    <br />
                    <Field
                      type="text"
                      className="form-control rounded-0 h-100 w-75"
                      name="first_name"
                    />
                    <ErrorMessage name="first_name" component="div" />
                  </div>
                </div>
                <div className="d-flex flex-row-reverse">
                  <button className="btn btn-primary rounded-0">Save</button>
                  <button className="btn btn-outline">Cancel</button>
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
      <h4>
        <strong>Personal Details</strong>
      </h4>
      <p>Update your name, email, and account password at any time.</p>

      <div className="d-flex justify-content-between my-3">
        <div>
          <h6>Name: </h6>
          <p>
            {userData?.firstName} {userData?.lastName}
          </p>
        </div>
        <div>
          <div
            style={{ listStyle: "none", cursor: "pointer", color: "blue" }}
            onClick={() => setFormType("name")}
          >
            Edit
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between my-3  ">
        <div>
          <h6>Email: </h6>
          <p>{userData?.email}</p>
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

      <div className="border">{handleClick()}</div>
    </div>
  );
}

export default Profile;
