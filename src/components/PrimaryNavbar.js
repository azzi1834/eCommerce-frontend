import {
  Col,
  Row,
  Button,
  Form,
  Nav,
  Navbar,
  Container,
  NavDropdown,
} from "react-bootstrap";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCart, BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../actions/authActions";

const PrimaryNavbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.user);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // dispatch(userLogout()); // Dispatch the logout action
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/">LOGO</Link>
        </Navbar.Brand>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Search</Button>
            </Col>
          </Row>
        </Form>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#" className="btn btn-outline">
              <BsCart /> Cart(0)
            </a>
          </Navbar.Text>

          {!isLoggedIn ? (
            <Navbar.Text>
              <Link to="/register" className="btn btn-outline">
                {/* <VscAccount /> */}
                <BsPersonCircle />
                Account
              </Link>
            </Navbar.Text>
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
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PrimaryNavbar;
