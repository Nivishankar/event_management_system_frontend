// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBars() {
  return (
    <Navbar expand="lg" className="Nav-col">
      <Container fluid>
        <Navbar.Brand className="ps-5 ms-5 fs-2">EM</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="ps-3 ms-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: "20rem" }}
            />
          </Form>
          <Nav className="Nav-ebtn">
            <NavDropdown
              className="pe-5 "
              title="Events"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/music">Music</NavDropdown.Item>
              {/* <NavDropdown.Item href="/djparty">DJ Party</NavDropdown.Item> */}
              <NavDropdown.Item href="/standup">Stand-Up</NavDropdown.Item>
              <NavDropdown.Item href="/workshop">Workshop</NavDropdown.Item>
            </NavDropdown>

            <Button as={Link} to={"/login"} type="button">
              Signin
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBars;
