import { Table } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";

import axios from "axios";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Organizer() {
  // Add
  const [eventAdd, setEventAdd] = useState([]);

  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    apiFetch();
  }, [eventAdd]);

  const apiFetch = async () => {
    try {
      // const loc = "mysore";
      // const res = await axios.get(`http://localhost:8080/location/${loc}`);
      const res = await axios.get("http://localhost:8080/get");
      setFetchData(res.data.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const eventApi = async () => {
    try {
      // console.log("post");
      const res = await axios.post("http://localhost:8080/eventregister", {
        organizerid: eventAdd.organizerid,
        events: [eventAdd],
      });
      alert("Event Added Successfully");
      console.log(res.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const addEvent = (event) => {
    const { name, value } = event.target;
    setEventAdd({ ...eventAdd, [name]: value });
  };
  return (
    <>
      <Navbar className="Nav-col" style={{ height: "4rem", width: "100vw" }}>
        <Container className="text-center">
          <Navbar.Brand
            className="ps-4 ms-5 fs-1"
            style={{ color: "paleturquoise" }}
          >
            EM
          </Navbar.Brand>
        </Container>
      </Navbar>

      <h3 className="text-center mt-3">ORGANIZER DASHBOARD</h3>
      <div className="Container mt-5 justify-content-center d-flex">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Control
                required
                type="text"
                name="organizerid"
                placeholder="OrganizerID"
                value={eventAdd.organizerid}
                onChange={addEvent}
              ></Form.Control>
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Control
                required
                type="text"
                name="image"
                placeholder="image url"
                value={eventAdd.image}
                onChange={addEvent}
              />
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Control
                required
                type="text"
                placeholder="Title"
                name="title"
                value={eventAdd.title}
                onChange={addEvent}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Control
                required
                type="text"
                name="description"
                placeholder="Description"
                value={eventAdd.description}
                onChange={addEvent}
              />
            </Form.Group>

            <Form.Group as={Col} md="4">
              <div>Start Date</div>
              <Form.Control
                required
                type="date"
                name="startDate"
                placeholder="Start Date"
                value={eventAdd.startDate}
                onChange={addEvent}
              />
            </Form.Group>

            <Form.Group as={Col} md="4">
              <div>End Date</div>

              <Form.Control
                required
                type="date"
                name="endDate"
                placeholder="End Date"
                value={eventAdd.endDate}
                onChange={addEvent}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Control
                required
                type="text"
                placeholder="Location"
                name="location"
                value={eventAdd.location}
                onChange={addEvent}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md="6">
              <Button type="button" onClick={eventApi}>
                Add Event
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </div>
      <br></br>
      <hr />
      <h3 className="text-center pb-4 pt-4">Manage Events</h3>
      {/* <Row className="ms-5">
        <Col sm={4}>
          <Button as={Link} to="/event">
            EditEvent
          </Button>
        </Col>
        <Col sm={4}>
          <Button as={Link} to="/ticket">
            EditTicket
          </Button>
        </Col>
        <Col sm={4}>
          <Button as={Link} to="/ticket">
            Add Ticket
          </Button>
        </Col>
      </Row> */}
      <Table border={1}>
        <thead>
          <tr>
            <th>Event Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image URL</th>
            <th>StartDate</th>
            <th>EndDate</th>
            <th>Location</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {fetchData.map((add, index) => (
            <tr key={index}>
              <td>{add.eventid}</td>
              <td>{add.title}</td>
              <td>{add.description}</td>
              <td>{add.image}</td>
              <td>{add.startDate}</td>
              <td>{add.endDate}</td>
              <td>{add.location}</td>
              <td>
                <Button as={Link} to="/event">
                  EditEvent
                </Button>
              </td>
              <td>
                <Button as={Link} to="/ticket">
                  Add Ticket
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Organizer;
