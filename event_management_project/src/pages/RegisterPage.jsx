import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-center fs-1 fw-bold mt-5 pt-3"
        style={{ fontStyle: "italic" }}
      >
        Register
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

          <Form.Group className="mb-3" controlId="formHorizontalEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              style={{ width: "23rem" }}
              type="Name"
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHorizontalPassword">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="Date of Birth" placeholder="Date of Birth" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formHorizontalEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="Mobile Number" placeholder="Mobile Number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHorizontalPassword">
            <Form.Label>Email ID</Form.Label>
            <Form.Control type="Email ID" placeholder="Email ID" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHorizontalPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Button
              as={Link}
              to={"/"}
              className="ms-5 mt-3 text-center "
              variant="primary"
              type="submit"
              style={{ width: "14rem" }}
            >
              Register
            </Button>{" "}
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
