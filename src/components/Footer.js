import React from "react";
import classes from "../style.module.css";
import Subscription from "./Subscription";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="container-fluid"
      style={{ padding: "30px 50px 20px 50px", backgroundColor: "#F0F2F4" }}
    >
      <div className=" container d-flex">
        <div className="col-9 p-3">
          <div className="row">
            <div className={`${classes.footerMenu} col-4`}>
              <h6>Order & Purchases</h6>
              <Link to="/shipping-delivery-pickup">
                Shipping, Delivery & Pickup
              </Link>
              <Link to="/return-exchange">Returns & Exchanges</Link>
              <Link to="/price-guarantee">Price Match Guaranted</Link>
              <Link to="/product-recalls">Product Recalls</Link>
            </div>
            <div className={`${classes.footerMenu} col-4`}>
              <h6>Support & Services</h6>
              <Link to="/support-center">View our Support Center</Link>
              <Link to="/services">Protection & Support Plans</Link>
              <Link to="/haul-recycling">Haul Away & Recycling</Link>
              <Link to="/contact-us">Contact </Link>
            </div>
            <div className={`${classes.footerMenu} col-4`}>
              <h6>Partnerships</h6>
              <a href="/affilate-program">Affilate Program</a>
              <a href="/developers">Developers</a>
              <a href="/health">Best Buy Health</a>
              <a href="/education">Best Buy Education</a>
            </div>
          </div>
          <hr />
          <p>
            In-store pricing may vary. Prices and offers are subject to change.
            © 2023 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo,
            the tag design, and MY BEST BUY are trademarks of Best Buy and its
            affiliated companies.
          </p>
        </div>
        <div className="col-3">
          <Subscription />
        </div>
      </div>
    </div>
  );
}

export default Footer;
