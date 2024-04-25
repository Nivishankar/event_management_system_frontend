import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function StandUp() {
  return (
    <div className='d-flex justify-content-center'>
        <div>
        <Card style={{ width: '14rem', margin:'5px'  }}>
      <Card.Img variant="top" src="https://applications-media.feverup.com/image/upload/f_auto,w_550,h_550/fever2/plan/photo/a2f97a6c-d348-11eb-9522-06551cb39bc6.jpg" />
      <Card.Body>
        <Card.Title>Stand Up Comedy</Card.Title>
        <Card.Text>
        Comedy Show Stand Up invitation is a neon sign. Logo, Emblem Bright flyer, light poster, neon banner.
        ₹500
        </Card.Text>
      </Card.Body>
      </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' , margin:'5px' }}>
  <Card.Img variant="top" src="https://cdn.podimo.com/images/1dfb8efe-b6ad-41f2-ad81-91f07e83cfb6_400x400.png"/>
  <Card.Body>
    <Card.Title>Stand Up Event</Card.Title>
    <Card.Text>
    Smiling and witty stand up actor comedian on stage.
    ₹700
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div>
<Card style={{ width: '18rem', margin:'5px'  }}>
  <Card.Img variant="top" src="https://play-lh.googleusercontent.com/ZFEdWR7oVxxKYuuAqWeb2Bs0RliNS66EQBd-jiPH32rKtyKQXZUSGEHQeq1N8ywsvJQ" />
  <Card.Body>
    <Card.Title>Best Stand Up Comedy</Card.Title>
    <Card.Text>
    Stand-up show set. Speech by men and girls with a microphone.
    ₹1000
    </Card.Text>
  </Card.Body>
</Card>
</div> 
</div>
  );
}

export default StandUp;