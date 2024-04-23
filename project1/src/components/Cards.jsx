import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <div className='d-flex justify-content-center'>
        <div>
        <Card style={{ width: '23rem',  margin:'5px'}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg?size=626&ext=jpg&ga=GA1.1.2029408618.1713867465&semt=ais/100px180" />
      <Card.Body>
        <Card.Title>Music Event</Card.Title>
        <Card.Text>
        Audiovisual works, such as TV shows, movies
        ₹500
        </Card.Text>
      </Card.Body>
      </Card>
        </div>

        <div>
        <Card style={{ width: '23rem', margin:'5px' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg"/>
  <Card.Body>
    <Card.Title>Popular Music</Card.Title>
    <Card.Text>
    Sound recordings and musical compositions
    ₹700
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div>
        <Card style={{ width: '23rem', margin:'5px' }}>
  <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/Yym2JXh8sTqTxT4nvC1KjAxgvrkiv62si_Jsi5j0n_-A_krdpiDJCxY3h63XFy12yy2e4FrqzMBrRcvkmyJUCq2BZjiWg9gfyEG_yawvmsYQFB04l-U" />
  <Card.Body>
    <Card.Title>Event Music</Card.Title>
    <Card.Text>
    Dramatic works, such as plays and musicals
    ₹1000
    </Card.Text>
  </Card.Body>
</Card>
</div> 
</div>
  );
}

export default Cards;

