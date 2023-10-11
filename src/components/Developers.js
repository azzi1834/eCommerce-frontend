import React from "react";

function Developers() {
  return (
    <div className="container text-center my-3 p-3">
      <div
        className="hero p-5 border text-white"
        style={{
          backgroundImage: `url("https://i.insider.com/61dc71461025b20018bb0597?width=700")`,
          opacity: "0.8",
        }}
      >
        <h2>
          Reach your full potential by integrating with the world's most
          powerful retail APIs
        </h2>
        <h6 className="mt-3">100+ Brands, 725,000+ Products... and Growing</h6>
        <button className="mt-3 btn btn-outline-light">Get API key</button>
      </div>
      <div className="my-5 " style={{ padding: "1rem 10rem 1rem 10rem" }}>
        <h2>
          <b>Documentation</b>
        </h2>
        <p>
          Whether you're an API pro, a beginning developer, or a xyz partner,
          our extensive API catalog is waiting for your imagination. Our API
          suite allows you to query Products, Stores, Categories, and much more.
          Come on in to explore our data, browse descriptions of our attributes
          and see examples of working requests and responses.
        </p>
        <hr />
        <h2>
          <b>Try our APIs Our Query</b>
        </h2>
        <p>
          Builder tool helps users get the most out of the xyz APIs by creating
          custom queries. Create a base for your own custom queries or use the
          Query Builder to access xyz API data. You can even customize your
          responses to better serve your purpose.
        </p>
      </div>
    </div>
  );
}

export default Developers;
