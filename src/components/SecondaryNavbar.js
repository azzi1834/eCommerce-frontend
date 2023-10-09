import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function SecondaryNavbar() {
  return (
    <Navbar
      expand="lg"
      style={{
        height: "3rem",
        backgroundColor: "#0046be",
        borderTop: "1px solid whitesmoke",
      }}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-dark">
            <Nav.Link href="#home" style={{ color: "white" }}>
              Top Deals
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "white" }}>
              Deals of the day
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "white" }}>
              Back To School
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "white" }}>
              Outlet
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SecondaryNavbar;
