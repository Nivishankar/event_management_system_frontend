import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const registerUser = (user) => {
    if (user.isOrganizer) {
      axios
        .post("http://localhost:8080/organizerregister", user)
        .then((res) => {
          if (res.data.isError === false && user.isOrganizer === true) {
            alert("Successfully Registered");
            navigate("/organizer");
          } else {
            alert("OOPS!Register again");
          }
          console.log(user);
          console.log(res.data);
        });
    } else {
      axios.post("http://localhost:8080/userregister", user).then((res) => {
        if (res.data.isError === false && user.isOrganizer === false) {
          alert("Successfully Registered");
          navigate("/");
        } else {
          alert("OOPS!Register again");
        }
        console.log(user);
        console.log(res.data);
      });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        width: "30rem",
        height: "45rem",
        marginLeft: "25rem",
        marginTop: "5rem",
      }}
    >
      <div
        className="d-flex justify-content-center fs-1 fw-bold mt-5 pt-3"
        style={{ fontStyle: "italic" }}
      >
        Register
      </div>
      <br />
      <Container className="d-flex justify-content-center align-items-center pt-4">
        <Form>
          <Form.Group
            className="mb-4"
            onChange={(event) =>
              setUser({
                ...user,
                isOrganizer: event.target.value === "true" ? true : false,
              })
            }
          >
            <Form.Label>Role</Form.Label>
            <br />
            <Form.Check
              inline
              type="radio"
              label="Organizer"
              name="isOrganizer"
              value={true}
              id="formHorizontalRadios1"
            />
            <Form.Check
              inline
              type="radio"
              label="User"
              name="isOrganizer"
              value={false}
              id="formHorizontalRadios1"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHorizontalEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(event) =>
                setUser({ ...user, name: event.target.value })
              }
              style={{ width: "23rem" }}
              type="text"
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHorizontalPassword">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              onChange={(event) =>
                setUser({ ...user, dob: event.target.value })
              }
              type="date"
              placeholder="Date of Birth"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formHorizontalEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              onChange={(event) =>
                setUser({ ...user, mobileno: event.target.value })
              }
              type="number"
              placeholder="Mobile Number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHorizontalPassword">
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
              type="email"
              placeholder="Email ID"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHorizontalPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Button
              // as={Link}
              // to={"/organizer"}
              className="ms-5 mt-3 text-center "
              variant="primary"
              type="button"
              onClick={() => registerUser(user)}
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
