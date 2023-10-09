import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  updateRequest,
  updateSuccess,
  updateFailure,
} from "../actions/userActions";
import axios from "axios";

function AddressBook() {
  // const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const id = useSelector((state) => state?.auth?.user?.data?.dataValues?.id);
  // const { data } = useSelector((state) => state?.auth?.user);

  console.log("id", id);
  // console.log("data", data);

  const update = (formData) => {
    console.log("in update func");
    return async (dispatch) => {
      dispatch(updateRequest());

      try {
        const response = await axios.put(
          `http://localhost:4000/api/user/profile/${id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("response", response);

        if (response.status === 200) {
          dispatch(updateSuccess(response?.data));
        } else {
          throw new Error("Updation failed");
        }
      } catch (error) {
        dispatch(updateFailure(error.message));
      }
    };
  };

  // useEffect(() => {}, [id]);

  return (
    <>
      <h2>Address Book</h2>
      {/* {!address ? "" : <p>{address}</p>} */}
      <Formik
        initialValues={{ address: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.address) {
            errors.address = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(update(values)).then(() => {
            setSubmitting(false); // Set submitting to false when the update is complete
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="address"
              placeholder="Enter Address Here"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddressBook;
