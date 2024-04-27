import Accordion from "react-bootstrap/Accordion"
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";



function Filters() {
  return (
    <>
      <Container className="d-flex">
        <div className="text-center mt-5 pt-5">
          <h3>Filters</h3>
          <br />
          <Accordion style={{ width: "20rem" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Date</Accordion.Header>
              <Accordion.Body>
                <input type="button" className="mx-1" value="Today" />
                <input type="button" className="mx-1" value="Tommorow" />
                <input type="button" className="mx-1" value="This Week" />

                <Form.Check aria-label="option 1" type="date" />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Languages</Accordion.Header>
              <Accordion.Body>
                <input type="button" className="mx-1" value="Englis" />
                <input type="button" className="mx-1" value="Hindhi" />
                <input type="button" className="mx-1" value="Malayalam" />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Locations</Accordion.Header>
              <Accordion.Body>
                <input type="button" className="mx-1" value="Mysore" />
                <input type="button" className="mx-1" value="Banglore" />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>categories</Accordion.Header>
              <Accordion.Body>
                <input type="button" className="mx-1" value="Music" />
                <input type="button" className="mx-1" value="Workshop" />
                <input type="button" className="mx-1" value="Stand-Up" />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </>
  );
}

export default Filters;
