import React from "react";

function AffilateProgram() {
  return (
    <div className="container p-3">
      <div
        className="row"
        style={{ backgroundColor: "#0046BE", color: "white" }}
      >
        <div className="col-6 p-5">
          <h3>
            <b>Join the XYZ affiliate program.</b>
          </h3>
          <p>
            We make it simple to start earning money by directing your visitors
            to xyz.com.
          </p>
        </div>
      </div>
      <h5 className="mt-3">Why become a XYZ affiliate?</h5>
      <div className="my-3 d-flex">
        <hr />

        <div className="col-4">
          <p>
            <b>Earn money.</b>
          </p>
          <p>
            Every time you drive your visitors to xyz.com and they make a
            qualifying purchase, you earn a commission.
          </p>
        </div>

        <div className="col-4">
          <p>
            <b>Partner with a trusted brand.</b>
          </p>
          <p>
            Associate your site with the No. 1 consumer electronics retailer in
            the world.
          </p>
        </div>

        <div className="col-4">
          <p>
            <b>Joining is free and easy.</b>
          </p>
          <p>
            Choose from a huge selection of free tools to help you create
            inspiring content.
          </p>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-6 text-center">
          <h4>Contact us and get help</h4>
          <p>Email: BBY_Affiliate@xyz.com</p>
        </div>
        <div className="col-6 text-center  ">
          <h4>Frequently asked questions</h4>
          <p>Email: BBY_Affiliate@xyz.com</p>
        </div>
      </div>
    </div>
  );
}

export default AffilateProgram;
