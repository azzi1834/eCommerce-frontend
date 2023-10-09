import React from "react";

function Health() {
  return (
    <div className="container my-3 p-3">
      <h5>Best Buy Health</h5>
      <div className="row border p-2">
        <div className="col-7 p-5">
          <h2>
            Best Buy Health™ meets you at the intersection of health and
            technology.
          </h2>
          <p>
            Best Buy Health is here to help enable care and support personal
            connections using our world-class omnichannel capabilities,
            distribution and logistics, strong analytics, in-home services, and
            compassionate Caring Center call specialists.
          </p>
          <button
            className="btn rounded-0"
            style={{ backgroundColor: "#0046be", color: "white" }}
          >
            Contact us
          </button>
        </div>
        <div className="col-5">
          <img
            src="https://st.depositphotos.com/1005893/2734/i/450/depositphotos_27341917-stock-photo-indian-doctor.jpg"
            style={{ width: "75%" }}
          />
        </div>
      </div>

      <div className="row my-5 p-3" style={{ backgroundColor: "#F0F2F4" }}>
        <div className="col-6 p-5">
          <h2>Social care teams.</h2>
          <p>
            <ul>
              <li>Social care teams led by staff with MSW/BSW credentials </li>
              <li>
                Remote fulfillment network that addresses social determinants of
                health
              </li>
              <li>Established, effective protocols</li>
            </ul>
          </p>
        </div>
        <div className="col-6">
          <img src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/socialwork_v2_mainpage_sol67850_der-185988.jpg;maxHeight=305;maxWidth=390"></img>
        </div>
      </div>

      <div className="row my-5 p-3">
        <div className="col-6 p-5">
          <h2>Urgent response agents. </h2>
          <p>
            <ul>
              <li>
                Customers have one-touch connection to agents for facilitation
                of emergency care
              </li>
              <li>Agents coordinate services for nonemergency needs</li>
              <li>
                Customers are covered whether they’re at home or on the go
              </li>
            </ul>
          </p>
        </div>
        <div className="col-6">
          <img src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/call_center_mainpage_sol67850_der-185643.jpg;maxHeight=305;maxWidth=390"></img>
        </div>
      </div>

      <div className="row my-5 p-3" style={{ backgroundColor: "#F0F2F4" }}>
        <div className="col-6 p-5">
          <h2>Acuity-based solutions.</h2>
          <p>
            <ul>
              <li>Loneliness and isolation assessment and support</li>
              <li>Proactive monitoring and optional outbound wellness calls</li>
              <li>Caregiver solutions and support</li>
            </ul>
          </p>
        </div>
        <div className="col-6">
          <img src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/senior_guitar_mainpage_sol67850_der-185654.jpg;maxHeight=305;maxWidth=390"></img>
        </div>
      </div>
    </div>
  );
}

export default Health;
