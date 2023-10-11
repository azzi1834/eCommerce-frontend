import React from "react";
import priceGuarantee from "../assets/pricegurante.png";

function PriceGuarantee() {
  return (
    <>
      <div
        className="container-fluid border"
        style={{ backgroundColor: "#E0E7EF" }}
      >
        <div className="container d-flex p-3 justify-content-center align-items-center">
          <img src={priceGuarantee}></img>
          <h1>Price Match Guarantee</h1>
        </div>
      </div>

      <div className="container text-center my-5">
        <h3>What qualifies?</h3>
        <p>Your product may be eligible for price matching if it is:</p>
        <div className="row mt-5">
          <div className="col-4 text-start">
            <h5>Identical to the Qualified Competitor product.</h5>
            <p>
              The product must be a matching brand, model number and color to
              qualify. The product must also be a new product.
            </p>
          </div>
          <div className="col-4 text-start">
            <h5>Immediately available at a Qualified Competitor.</h5>
          </div>
          <div className="col-4 text-start">
            <h5> Not shown on our exclusions list.</h5>
            <p>
              Exclusions apply including, but not limited to, items sold by
              Marketplace vendors, Qualified Competitors’ service prices,
              special daily or hourly sales, and items for sale at a Qualified
              Competitor the Friday before Thanksgiving Day through the Monday
              after Thanksgiving. See our full list of exclusions
            </p>
          </div>
        </div>

        <div className="my-5 text-start">
          <h4> Price Match Guarantee policy details.</h4>
          <hr />
          <h6>We won't be beat on price.</h6>
          We'll match the current product price of key online and local
          competitors ("Qualified Competitors") for immediately available new
          products (excludes clearance, refurbished and open-box items).
          <h6>Special considerations:</h6>
          <ul>
            <li>
              At the time of sale, we price match these Qualified Competitors.
            </li>
            <li>
              We match our online and app prices on in-store purchases and our
              in-store prices on online and app purchases.
            </li>
            <li>
              If we lower our in-store, online or app price during the return
              and exchange period, we will match our lower price, upon request.
            </li>
            <li>
              Our Price Match Guarantee covers new items (excludes clearance,
              refurbished and open-box items). One price match at the time of
              purchase, per identical item, per customer, at the current pre-tax
              price available to all customers is allowed.
            </li>
          </ul>
          <h6>Our Price Match Guarantee does not cover:</h6>
          <ul>
            <li>
              The prices of retailers not listed as a Qualified Competitor.{" "}
            </li>
            <li>
              {" "}
              Products shipped from or sold by third-party sellers on a
              Qualified Competitor website.
            </li>
            <li>
              {" "}
              Pricing only available to select groups of customers including
              Membership Program members, loyalty offers, discounts relating to
              non-warehouse membership or paid loyalty programs and government
              exchange store offers.{" "}
            </li>
            <li>
              {" "}
              Transactions from xyz Education, xyz Business and from a xyz
              Marketplace store on a third-party website (e.g., Amazon, eBay,
              Google).{" "}
            </li>
            <li>
              {" "}
              Qualified Competitor offers including contract cell phones,
              service prices (including delivery and installation charges),
              pre-order offers, rent/lease to own items, liquidation offers,
              trade-in offers, items denoted as Black Friday pricing, special
              daily or hourly sales and items for sale the Friday before
              Thanksgiving Day through the Monday after Thanksgiving.
            </li>
            <li>
              {" "}
              Any financing offers, bundle offers, items included in bundle
              offers, subscription services, free items, pricing errors, mail-in
              offers, coupon offers, items that are advertised as limited
              quantity, out of stock items, clearance items, open-box items,
              refurbished items, pre-owned items, credit card offers, gift card
              offers, items included in gift card offers, Point of Sale
              Activation cards, video game discounts related to a membership
              program, and voice-only deals, whether offered by us or a
              Qualified Competitor.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default PriceGuarantee;
