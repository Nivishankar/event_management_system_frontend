import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [login, setLogin] = useState({});

  const navigate = useNavigate();

  const Login = (login) => {
    if (login.isOrganizer) {
      axios.post("http://localhost:8080/organizerlogin", login).then((res) => {
        if (res.data.isError === false && login.isOrganizer === true) {
          // alert("Login successfull");
          navigate("/organizer");
        } else {
          alert("Invalid email and password");
        }
        console.log(login);
        console.log(res.data);
      });
    } else {
      axios.post("http://localhost:8080/userlogin", login).then((res) => {
        if (res.data.isError === false && login.isOrganizer === false) {
          // alert("Login successfull");
          navigate("/");
        } else {
          alert("Invalid email and password");
        }
        console.log(login);
        console.log(res.data);
      });
    }
  };

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
          <Form.Group
            className="mb-4"
            onChange={(event) =>
              setLogin({
                ...login,
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

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              style={{ width: "20rem" }}
              type="email"
              placeholder="Enter email"
              onChange={(event) =>
                setLogin({ ...login, email: event.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) =>
                setLogin({ ...login, password: event.target.value })
              }
            />
          </Form.Group>

          <Button
            // as={Link}
            // to={"/organizer"}
            variant="primary"
            className="ms-4 text-center "
            type="button"
            onClick={() => Login(login)}
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
