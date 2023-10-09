import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../style.module.css";
import { CgProfile } from "react-icons/cg";
import { PiAddressBookThin } from "react-icons/pi";
import { AiOutlineHistory } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";

function SidebarDashboard() {
  const [activeItem, setActiveItem] = useState("profile");

  const updateActiveItem = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <div className="container p-3 ">
        <h5> Manage My Account </h5>
        <div className={Styles.dashboardSidebar}>
          <ul>
            <div className={activeItem === "profile" ? Styles.activeItem : " "}>
              <li>
                <Link to="profile" onClick={() => updateActiveItem("profile")}>
                  <CgProfile className={Styles.iconSize} /> Profile Details
                </Link>
              </li>
            </div>
            <div
              className={activeItem === "addresses" ? Styles.activeItem : " "}
            >
              <li>
                <Link
                  to="addresses"
                  onClick={() => updateActiveItem("addresses")}
                >
                  <PiAddressBookThin className={Styles.iconSize} /> Addresses
                </Link>
              </li>
            </div>

            <li>
              <Link to="orderHistory">
                <AiOutlineHistory className={Styles.iconSize} />
                Order History
              </Link>
            </li>
            <li>
              <Link to="paymentMethods">
                <MdOutlinePayment className={Styles.iconSize} />
                Payment Methods
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SidebarDashboard;
