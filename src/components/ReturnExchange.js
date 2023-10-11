import React from "react";
import exchange from "../assets/returnExchange.jpg";

function ReturnExchange() {
  return (
    <>
      <div className="container my-2 p-4">
        <h5>Returns and Exchanges</h5>
        <br />
        <h5>How to start a return</h5>
        <div className="d-flex justify-content-start p-3">
          <div className="p-3 mx-2 border rounded">
            <h5>Return it to a store</h5>
            <p>
              Return any in-store or online purchase to any xyz store. Find a
              store
            </p>
          </div>
          <div className="  p-3 mx-2 border rounded">
            <h5>Ship it back to us</h5>
            <p>
              Ship it for free with a prepaid UPS shipping label. Start a return
            </p>
          </div>
        </div>
        <div
          className="container"
          style={{ backgroundColor: "#0044c0", color: "white" }}
        >
          <div className="row">
            <div className="col-6 p-5">
              <h3> Our promise</h3>
              <p>
                We work hard every day to enrich the lives of our customers
                through technology, whether you come to us online, visit our
                stores or invite us into your home. If you are not fully
                satisfied with your purchase, let us help you with a
                replacement, return or repair.
              </p>
            </div>
            <div className="col-6">
              <img src={exchange}></img>
            </div>
          </div>
        </div>
        <h4 className="mt-5" style={{ color: "#1152C2" }}>
          Return and exchange periods
        </h4>
        <hr />
        <p>
          If you want to return or exchange your purchase, please know that the
          time period begins the day you receive your product and applies to
          new, clearance, open-box, refurbished and pre-owned products. This
          policy applies to purchases from xyz, xyz Outlet, Pacific Sales,
          Pacific Sales® Outlet, Magnolia® Design Center, xyz Education and xyz
          Business.
        </p>
        <table className="table text-center my-5">
          <tr>
            <th scope="col">Member Status</th>
            <th scope="col">Standard</th>
            <th scope="col">My xyz Plus™ and My xyz Total™ members</th>
          </tr>
          <tr>
            <th scope="row">Most products</th>
            <td>15 days</td>
            <td>60 days</td>
          </tr>

          <tr>
            <th scope="row">Activatable devices</th>
            <td>14 days</td>
            <td>14 days</td>
          </tr>
        </table>

        <small>
          *Activatable devices are devices capable of being activated and
          include cell phones, cellular tablets, mobile hotspots, and cellular
          wearables. Verizon devices capable of being activated have a 30-day
          return period for all customers.
        </small>
        <h4 className="mt-5" style={{ color: "#1152C2" }}>
          Restocking fees
        </h4>
        <hr />
        <p>
          Some items we sell (see below for the detailed list) have a restocking
          fee if returned by a customer.
        </p>
        <table className="table my-5 p-2">
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Returns fee</th>
          </tr>
          <tr>
            <td>Activatable devices (excluding prepaid phones)</td>
            <td>$45</td>
          </tr>

          <tr>
            <td>
              Drones, digital cameras, camera lenses, camcorders (including
              action cameras), electric bikes, electric mopeds, premium
              scooters, super scooters, mobility scooters, electric wheelchairs,
              leg and body recovery systems, projectors, projector screens, and
              special-order products
            </td>
            <td>15% of item purchase price</td>
          </tr>
        </table>
        <p>
          There is no restocking fee if the product is unopened, or if the
          purchase and the return both occur within: AL, CO, HI, IA, MS, OH, OK,
          SC and where prohibited by law. The restocking fee will be taxed in
          select states.
        </p>

        <br />
        <h6>Final sale and nonreturnable items</h6>
        <p>
          All final sale merchandise cannot be returned. Other nonreturnable
          purchases include custom orders, personalized orders, non-subscription
          digital content (including digital gaming but excluding Microsoft
          Office), prepaid cards (including third-party gift cards and prepaid
          phone cards), vehicle replacement key fobs, memberships, completed
          services, plumbing items including bidets, sexual wellness products,
          trading cards (including Pokémon cards), home standby generators,
          opened products that interact with bodily fluids, opened SIM kits,
          opened LEGO products, opened consumable items including batteries,
          cleaning agents, oils, fuel, filters, cleaners, health supplements,
          health test kits, ink and 3D printer filament.
        </p>

        <h6>Like-new condition</h6>
        <p>
          Items need to be returned in a like-new condition. Items that are
          damaged, unsanitary, dented, scratched or missing major contents may
          be denied a return. Apparel must not be worn or laundered, and its
          original tags must be attached for us to accept a return.{" "}
        </p>
      </div>
    </>
  );
}

export default ReturnExchange;
