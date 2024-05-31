import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function EventForm(props) {
  const [editEvent, setEditEvent] = useState({
    eventid: "2",
    startDate: "",
    endDate: "",
    location: "",
  });

  const navigate = useNavigate();

  useEffect(() => {}, [editEvent]);

  const editApi = async () => {
    try {
      const res = await axios.put(
        "http://localhost:8080/updateevent",
        editEvent
      );
      alert(res.data.message);
      navigate("/organizer");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const edit = (event) => {
    const { name, value } = event.target;
    setEditEvent((prevState) => ({ ...prevState, [name]: value }));
    // setEditEvent({ ...editEvent, [name]: value });
  };

  return (
    <>
      <div className="Container mt-5 justify-content-center d-flex">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Control
                required
                type="text"
                name="eventid"
                // placeholder
                // value={props.id}
                // onChange={edit}
              ></Form.Control>
            </Form.Group>

            <Form.Group as={Col} md="6">
              <Form.Control
                required
                type="text"
                name="location"
                placeholder="Location"
                value={editEvent.location}
                onChange={edit}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <div>Start Date</div>
              <Form.Control
                required
                type="date"
                name="startDate"
                placeholder="Start Date"
                value={editEvent.startDate}
                onChange={edit}
              />
            </Form.Group>

            <Form.Group as={Col} md="6">
              <div>End Date</div>

              <Form.Control
                required
                type="date"
                name="endDate"
                placeholder="End Date"
                value={editEvent.endDate}
                onChange={edit}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md="6">
              <Button type="button" onClick={editApi}>
                Edit
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </>
  );
}
export default EventForm;
