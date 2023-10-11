import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { AiOutlineSearch } from "react-icons/ai";

const PrimaryNavbar = () => {
  const isTokenFound = localStorage.getItem("token");
  const { isLogin } = useSelector((state) => state.auth);

  const searchPattern = /^\s*$/;

  const searchProducts = (values) => {
    axios
      .post("http://localhost:4000/api/product/search", { search: values })
      .then((response) => {
        // console.log("response", response);
        navigate("/search", { state: response?.data });
      });
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <>
      <Navbar style={{ height: "5rem", backgroundColor: "#0046BE" }}>
        <div className="container d-flex justify-content-between ">
          <div className="d-flex">
            <div className="">
              <Link to="/">
                <img
                  src={logo}
                  alt="LOGO"
                  style={{ height: "auto", width: "50%" }}
                />
              </Link>
            </div>

            <div>
              <Formik
                initialValues={{ keyword: "" }}
                onSubmit={(values) => {
                  if (
                    values.keyword.length <= 0 ||
                    searchPattern.test(values.keyword.length)
                  ) {
                    navigate("/");
                  } else {
                    console.log(values.keyword.length);
                    searchProducts(values.keyword);
                  }
                }}
              >
                <Form>
                  <Field
                    type="text"
                    name="keyword"
                    placeholder="Enter keyword"
                    style={{
                      height: "2.5rem",
                      padding: "0px 0px 0px 15px",
                      marginTop: "5%",
                      border: "0px",
                      borderRadius: "1rem 0rem 0rem 1rem",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      color: "black",
                      height: "2.5rem",
                      backgroundColor: "white",
                      outline: "none",
                      border: "0px",
                      padding: "0px 10px 0px 10px",
                      borderRadius: "0rem 1rem 1rem 0rem",
                    }}
                  >
                    <AiOutlineSearch
                      style={{ height: "20px", width: "20px" }}
                    />
                  </button>
                </Form>
              </Formik>
            </div>
          </div>

          <div className="d-flex">
            <Link to="/cart" className="btn btn-outline">
              <BsCart
                style={{ height: "25px", width: "25px", color: "white" }}
              />
            </Link>

            {!isTokenFound || !isLogin ? (
              <div className="text-white">
                <Link
                  to="/register"
                  className="btn btn-outline "
                  style={{ color: "white" }}
                >
                  Register
                </Link>
                {"|"}
                <Link
                  to="/login"
                  className="btn btn-outline"
                  style={{ color: "white" }}
                >
                  Login
                </Link>
              </div>
            ) : (
              <div>
                <Nav className="ms-auto">
                  <NavDropdown
                    className="justify-content-end"
                    title={
                      <img
                        className="thumbnail-image"
                        alt="Profile"
                        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1692939966~exp=1692940566~hmac=9ba5c7ac0ed2b565e7093a76c277f10ee08ceb4871ae311584123810d4e0a2e6"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      />
                    }
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item className="border-bottom">
                      <Link
                        to="/user"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Profile
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </div>
            )}
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default PrimaryNavbar;
