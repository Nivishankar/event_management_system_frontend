import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TicketForm = () => {
  const [ticket, setTicket] = useState({});
  const navigate = useNavigate();

  const addTicket = (ticket) => {
    axios
      .post("http://localhost:8080/ticketregister", {
        eventid: ticket.eventid,
        tickets: [ticket],
      })
      .then((res) => {
        console.log(res.data);
        alert("ticket added");
        navigate("/organizer");
      });
  };

  return (
    <>
      <div className="Container mt-5 justify-content-center d-flex">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Control
                required
                type="text"
                placeholder="EventID"
                onChange={(event) =>
                  setTicket({ ...ticket, eventid: event.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Control
                required
                type="text"
                placeholder="Ticket Type"
                onChange={(event) =>
                  setTicket({ ...ticket, tickettype: event.target.value })
                }
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Control
                required
                type="number"
                placeholder="Price"
                onChange={(event) =>
                  setTicket({ ...ticket, price: event.target.value })
                }
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Control
                type="number"
                placeholder="QuantityAvailable"
                required
                onChange={(event) =>
                  setTicket({
                    ...ticket,
                    quantityAvailable: event.target.value,
                  })
                }
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4">
              <Button
                type="button"
                // as={Link}
                // to="/event"
                onClick={() => addTicket(ticket)}
              >
                Add Ticket
              </Button>
            </Form.Group>

            {/* <Form.Group as={Col} md="4">
              <Button
                type="button"
                // as={Link}
                // to="/event"
                onClick={() => addTicket(ticket)}
              >
                Edit Ticket
              </Button>
            </Form.Group> */}
          </Row>
        </Form>
      </div>
    </>
  );
};

export default TicketForm;
