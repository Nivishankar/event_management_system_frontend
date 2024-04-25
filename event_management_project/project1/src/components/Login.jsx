import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'

function Login() {
  return (
    <div>
    <div className='d-flex justify-content-center' >Event Management</div><br/>
  
    <Container className='d-flex justify-content-center'>

    <Form>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
    
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group><br/>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Form.Group className="mb-2" controlId="formBasicCheckbox">
      </Form.Group><br/>
      <Button variant="primary" type="Login">
        Login
      </Button>
    </Form>
    </Container>
    </div>
  );
}

export default Login;