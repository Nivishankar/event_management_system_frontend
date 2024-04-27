// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
// import { Image } from "react-bootstrap";

function NavBars() {
  return (
    <Navbar className="Nav-col" style={{ height: "4rem", width: "100vw" }}>
      <Container className="text-center">
        <Navbar.Brand
          className="ps-4 ms-5 fs-1"
          style={{ color: "paleturquoise" }}
        >
          EM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="ps-3 ms-3">
            <Form.Control
              type="search"
              placeholder="search"
              className="me-2"
              aria-label="Search"
              style={{ width: "20rem", height: "2rem" }}
            />
          </Form>
          <Nav className="Nav-ebtn">
            <NavDropdown
              className="pe-5 "
              title={
                <span style={{ color: "paleturquoise", fontSize: "18px" }}>
                  Events
                </span>
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item className="Nav-event" href="/music">
                Music
              </NavDropdown.Item>
              {/* <NavDropdown.Item className="Nav-event" href="/djparty">
                DJ Party
              </NavDropdown.Item> */}
              <NavDropdown.Item className="Nav-event" href="/standup">
                Stand-Up
              </NavDropdown.Item>
              <NavDropdown.Item className="Nav-event" href="/workshop">
                Workshop
              </NavDropdown.Item>
            </NavDropdown>

            <Button
              as={Link}
              to={"/login"}
              type="button"
              style={{
                width: "6rem",
                height: "2rem",
                paddingBottom: "2rem",
                backgroundColor: "paleturquoise",
                borderColor: "paleturquoise",
                color: "black",
              }}
            >
              Signin
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBars;
