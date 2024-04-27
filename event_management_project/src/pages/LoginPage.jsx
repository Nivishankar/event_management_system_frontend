import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        width: "30rem",
        height: "35rem",
        marginLeft: "25rem",
        marginTop: "8rem",
      }}
    >
      <div
        className="d-flex justify-content-center fs-1 fw-bold mt-5 pt-5"
        style={{ fontStyle: "italic" }}
      >
        Event Management
      </div>
      <br />

      <Container className="d-flex justify-content-center align-items-center pt-5">
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Role</Form.Label>
            <br />
            <Form.Check
              inline
              type="radio"
              label="Organizer"
              name="role"
              id="formHorizontalRadios1"
            />
            <Form.Check
              inline
              type="radio"
              label="User"
              name="role"
              id="formHorizontalRadios1"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              style={{ width: "20rem" }}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button
            as={Link}
            to={"/"}
            variant="primary"
            className="ms-4 text-center "
            type="submit"
            style={{
              width: "16rem",
            }}
          >
            Login
          </Button>
          <br></br>
          <br />
          <Form.Text
            className="d-flex justify-content-center"
            style={{ color: "blueviolet" }}
            as={Link}
            to={"/register"}
          >
            New User? Register Here
          </Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default LoginPage;
