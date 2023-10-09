import React from "react";

function HaulRecycling() {
  return (
    <div className="container my-3 p-3">
      <h4>
        Electronics, Appliances and Fitness Equipment Recycling at Best Buy
      </h4>
      <div
        className="row align-items-center p-3"
        style={{ backgroundColor: "#1152c2" }}
      >
        <div className="col-4 text-end">
          <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-82316-cbw-recycle-230401-a9d8c59f-403b-4a18-ad44-a6b68c0c711d.png;maxHeight=170;maxWidth=170"></img>
        </div>
        <div className="col-8 text-white">
          <h1>
            <b>Resources Reused</b>
          </h1>
          <p>
            We recycle all kinds of tech, no matter how old, how big or where
            you bought it.
          </p>
        </div>
      </div>

      <div className="my-5">
        <h4>Products we recycle in store* </h4>
        <hr />
        At most Best Buy stores, you can recycle up to three items per household
        per day (see categories below for state-specific info, and different
        limitations on TVs, computer monitors and laptops). Plus, haul-away
        options are available for larger items in your home.
      </div>

      <div className="border d-flex p-2">
        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-82316-pol-recycling-box-230401-33cd2414-8e34-40f3-bd6b-e1c9d49b5f5d.jpg;maxHeight=188;maxWidth=276" />
        <div className="mx-5 my-5">
          <h4 style={{ color: "#1152c2" }}>Mail-in recycling Service</h4>
          <p>
            If you need to recycle electronics, but live far from a Best Buy
            store or can’t drive to one, we’ve got a great option for you.
          </p>
          <small> Exclusions, terms and conditions apply.</small>
        </div>
      </div>

      <div className="my-5">
        <h4>Disclosures</h4>
        <hr />
        <small>
          <h6>Recyclable product details:</h6>
          *Recycling is intended for residents only. Products from businesses
          and organizations, or items that present a health or safety hazard are
          not accepted. Best Buy does not accept any product subject to a CPSC
          recall through the company's voluntary in-store or online recycling
          programs. For more information and support on a product purchased at
          Best Buy that has been recalled, please visit Product Recalls & Safety
          Alerts or Consumer Product Safety Commission. By going to spsc.gov,
          you are leaving BestBuy.com and entering a site hosted and operated by
          the Consumer Product Safety Commission. Please review their Privacy
          Policy. Different terms and conditions may apply.
          <br />
          <h6>State-specific recycling information:</h6> *If you click on any of
          the links within the state-specific recycling information tool, you
          will leave BestBuy.com and enter a site hosted and operated by another
          entity. Please review their Privacy Policy. Different terms and
          conditions apply.
        </small>
      </div>
    </div>
  );
}

export default HaulRecycling;
