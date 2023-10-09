import React from "react";
import { useSelector } from "react-redux";
import { IoMdArrowDropright } from "react-icons/io";
import { AiOutlineHistory } from "react-icons/ai";
import { MdPayments, MdOutlinePriceCheck } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { BsFillFilePersonFill } from "react-icons/bs";
import Styles from "../style.module.css";

function Test() {
  const user = useSelector((state) => state?.auth?.user);
  console.log("user", user);
  const userData = user?.data?.dataValues;
  console.log("userData", userData);

  return (
    <>
      <div className="container" style={{ padding: "5rem 0rem 2rem 5rem" }}>
        <h1>Hi, {userData?.firstName}!</h1>
        <p>Welcome to your account.</p>
      </div>
      <hr />

      <div className={`container-fluid ${Styles.test}`}>
        <div className="p-4 m-3 border d-flex w-25">
          <BsFillFilePersonFill
            style={{ height: "2rem", width: "2rem", marginTop: "-5px" }}
          />
          <div>
            <h5>Personal Details</h5>
            <p>Update your name, email, and account password any time</p>

            <a href="#">
              <strong>
                Your personal details <IoMdArrowDropright />
              </strong>
            </a>
          </div>
        </div>
        <div className="p-4 m-3 border d-flex w-25">
          <AiOutlineHistory
            style={{ height: "2rem", width: "2rem", marginTop: "-5px" }}
          />
          <div>
            <h5>Order History</h5>
            <p>Track your recent purchases and view past orders with ease.</p>

            <a href="#">
              <strong>
                Your Orders <IoMdArrowDropright />
              </strong>
            </a>
          </div>
        </div>
        <div className="p-4 m-3 border d-flex w-25">
          <MdPayments
            style={{ height: "2rem", width: "2rem", marginTop: "-5px" }}
          />
          <div>
            <h5>Payment Methods</h5>
            <p>Save and mange your payment details for fast checkout</p>

            <a href="#">
              <strong>
                Your credit cards <IoMdArrowDropright />
              </strong>
            </a>
          </div>
        </div>
        <div className="p-4 m-3 border d-flex w-25">
          <FaRegAddressBook
            style={{ height: "2rem", width: "2rem", marginTop: "-5px" }}
          />
          <div>
            <h5>Addresses</h5>
            <p>Add your prefered address and choose a favourite</p>

            <a href="#">
              <strong>
                Your shipping Addresses <IoMdArrowDropright />
              </strong>
            </a>
          </div>
        </div>

        <div className="p-4 m-3 border d-flex w-25">
          <FaRegAddressBook
            style={{ height: "2rem", width: "2rem", marginTop: "-5px" }}
          />
          <div>
            <h5>Membership</h5>
            <p>Discover the benefits of Membership</p>

            <a href="#">
              <strong>
                Your Membership <IoMdArrowDropright />
              </strong>
            </a>
          </div>
        </div>
        <div className="p-4 m-3 border d-flex w-25">
          <MdOutlinePriceCheck
            style={{ height: "2rem", width: "2rem", marginTop: "-5px" }}
          />
          <div>
            <h5>Monthly Subscription</h5>
            <p>Enjoy the latest tech with low monthly pricing</p>

            <a href="#">
              <strong>
                Your Monthly Subscription <IoMdArrowDropright />
              </strong>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;
