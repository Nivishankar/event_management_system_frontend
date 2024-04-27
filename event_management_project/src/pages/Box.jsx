import Form from 'react-bootstrap/Form';

function Box() {
  return (
    <>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="Date"
          placeholder="Date-time-year"
        />
        <label htmlFor="floatingInputCustom">Date</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="Location"
          placeholder="Adress"
        />
        <label htmlFor="floatingPasswordCustom">Location</label>
      </Form.Floating>
    </>
  );
}

export default Box;