import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WorkShops() {
  return (
    <div className='d-flex justify-content-center'>
        <div>
        <Card style={{ width: '23rem' , margin:'5px' }}>
      <Card.Img variant="top" src="https://heritagecenter.mn/wp-content/uploads/2022/03/2018_0826_Earle_Brown_Center_DAYTA_YuppyPhoto-2-1080x675.jpg" />
      <Card.Body>
        <Card.Title>Workshop and Conference</Card.Title>
        <Card.Text>
        A workshop is an interactive meeting in which a group of people
        ₹500
        </Card.Text>
      </Card.Body>
      </Card>
        </div>

        <div>
        <Card style={{ width: '23rem', margin:'5px'  }}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2A55buybj93KwHh4W8O6lY2oo62WFJ-69Ng&usqp=CAU"/>
  <Card.Body>
    <Card.Title>Family Workshop Events</Card.Title>
    <Card.Text>
    SDefine Your Workshop's Purpose and Goals. Workshop success is directly linked to planning, starting with setting clear goals
    ₹700
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div>
        <Card style={{ width: '23rem', margin:'5px' }}>
  <Card.Img variant="top" src="https://i0.wp.com/blog.inevent.com/wp-content/uploads/2023/11/Creative-Workshop-Event-Cover.png?fit=1511%2C851&ssl=1" />
  <Card.Body>
    <Card.Title>Creative Workshop Events</Card.Title>
    <Card.Text>
    The International Press Telecommunications Council, in conjunction with Project Origin.
    ₹1000
    </Card.Text>
  </Card.Body>
</Card>
</div> 
</div>

  );
}

export default WorkShops ;
