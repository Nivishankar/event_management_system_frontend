import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Register() {
  return (
    <div>
    <div className='d-flex justify-content-center'>
        Register
    </div><br/>
    <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>

          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Organizer"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
          </Col>
        </Form.Group>
        </fieldset>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="User"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
          </Col>
        </Form.Group>
      </fieldset>
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
        Name
        </Form.Label>
        <Col sm={4}>
          <Form.Control type="Name" placeholder="Name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Date of Birth
        </Form.Label>
        <Col sm={4}>
          <Form.Control type="Date of Birth" placeholder="Date of Birth" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
        Mobile Number
        </Form.Label>
        <Col sm={4}>
          <Form.Control type="Mobile Number" placeholder="Mobile Number" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
        Email ID
        </Form.Label>
        <Col sm={4}>
          <Form.Control type="Email ID" placeholder="Email ID" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={4}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
    </div>
  );
}

export default Register;