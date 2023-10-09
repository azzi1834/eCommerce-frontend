import React from "react";
import Slider from "react-slick";

function Filters() {
  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 40,
      label: "40",
    },
    {
      value: 60,
      label: "60",
    },
    {
      value: 80,
      label: "80",
    },
  ];

  function valuetext(value) {
    return value;
  }
  return (
    <div className="container">
      <p>
        <strong>Price</strong>
      </p>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={20}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" htmlFor="flexCheckDefault">
          $25 - $49.99
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" htmlFor="flexCheckDefault">
          $500 - $749.99
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" htmlFor="flexCheckDefault">
          $750 - $999.99
        </label>
      </div>
      <hr />
      <p>
        <strong>category</strong>
      </p>
      <a href="">Cell Phones</a>
      <br />
      <a href="">Video Games</a>
      <br />
      <a href="">Smart Watches</a>
      <br />
      <a href="">TV & Home Theater</a>
      <br />
      <a href="">Workout & Gym</a>
      <hr />
    </div>
  );
}

export default Filters;
