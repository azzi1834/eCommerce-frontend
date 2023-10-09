import React from "react";

import {
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialTwitter,
} from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

function Subscription() {
  return (
    <div className="container p-4 bg-white">
      <div className="d-flex flex-column justify-content-center">
        <h6>JOIN OUR NEWSLETTER</h6>
        <p>
          Join our email subscription now to get updates on promotions and
          coupons.
        </p>
        <div className=" d-flex w-100 justify-content-between ">
          <input
            type="email"
            placeholder="Email"
            style={{
              height: "40px",
              padding: "5px",
              width: "75%",
            }}
          ></input>
          <button
            type="submit"
            style={{
              backgroundColor: "#001E73",
              color: "white",
              height: "40px",
              width: "25%",
              border: "0px",
            }}
          >
            Submit
          </button>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <TiSocialFacebook />
          <SlSocialInstagram />
          <TiSocialYoutube />
          <TiSocialTwitter />
        </div>
      </div>
    </div>
  );
}

export default Subscription;
