import React from "react";
import TopCategories from "./TopCategories";

function Services() {
  return (
    <div className="container my-3 p-3">
      <h5>Services</h5>
      <div className="row p-4 " style={{ backgroundColor: "#E0E6EF" }}>
        <div className="col-8">
          <h4>Need help with a product? Have tech questions?</h4>

          <ul>
            <li>We can solve many computer problems remotely.</li>
            <li>We can troubleshoot issues across a range of products.</li>
            <li>
              We can answer your tech questions and help schedule services.
            </li>
          </ul>

          <button
            className="btn col-5 mx-2"
            style={{ backgroundColor: "#1152c2", color: "white" }}
          >
            chat with a greek squad agent
          </button>

          <button
            className="btn col-5"
            style={{ backgroundColor: "#1152c2", color: "white" }}
          >
            schedule a service or repair
          </button>
        </div>
        <div className="col-4">
          <h4>Best Buy Support</h4>
          <p>
            Have questions about an order or your Best Buy account? Let’s get
            you to the right place.
          </p>
          <button
            className="btn w-100"
            style={{ backgroundColor: "white", color: "#1152c2" }}
          >
            Visit Best Buy Support
          </button>
        </div>
      </div>

      <div className="container text-center my-5">
        <h3>----------Shop for services by category----------</h3>
        <p>
          Learn about all the ways we can set up, install and repair the tech
          and appliances in your home.
        </p>

        <TopCategories />
      </div>
    </div>
  );
}

export default Services;
