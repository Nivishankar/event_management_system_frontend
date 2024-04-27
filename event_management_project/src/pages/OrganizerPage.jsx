import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

function ContainerInsideExample() {
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
        <Button
          as={Link}
          to={"/organizer"}
          className="mt-3 text-center "
          type="submit"
          style={{
            width: "10rem",
            backgroundColor: "paleturquoise",
            color: "black",
          }}
        >
          ADD
        </Button>
        <Button
          as={Link}
          to={"/organizer"}
          className="mt-3 text-center "
          variant="primary"
          type="submit"
          style={{
            width: "10rem",
            backgroundColor: "paleturquoise",
            color: "black",
          }}
        >
          VIEW
        </Button>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;
