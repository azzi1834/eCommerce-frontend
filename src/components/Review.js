import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Rating } from "@mui/material";
import { useSelector } from "react-redux";

function Review() {
  const { id } = useParams(); //return obj in key/value pair

  const [review, setReview] = useState([]);

  const { isLogin } = useSelector((state) => state.auth);

  const getReviews = async () => {
    await axios
      .get(`http://localhost:4000/api/product/${id}/reviews`)
      .then((resp) => {
        setReview(resp?.data);
        console.log("review", resp?.data);
      });
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className="review border rounded p-4 m-5">
      <h5> Customer Reviews</h5>
      {review?.length === 0 ? (
        <p>0 reviews </p>
      ) : (
        <>
          <p>{review?.length} review/s</p>
          {review &&
            review.map((rev) => {
              return (
                <div key={rev?.id} className="  row">
                  <div className="col-1  ">
                    <img
                      src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                      style={{ height: "120px", width: "120px" }}
                    />
                  </div>
                  <div className="col-11 d-flex flex-column justify-content-center">
                    <h6>{rev?.user?.firstName} </h6>

                    <Rating
                      name="read-only"
                      value={rev?.rating}
                      precision={0.5}
                      readOnly
                    />
                  </div>

                  <p style={{ paddingLeft: "3rem" }}>{rev?.message}</p>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
}

export default Review;
