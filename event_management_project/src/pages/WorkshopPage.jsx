import Cards from '../components/Cards';
import NavBars from '../components/NavBars';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Filters from '../components/Filters';

function WorkShops() {
  return (
    <>
    <NavBars/>
    <Container >
        <Row>
          <Col sm={4}>
            <Filters />
          </Col>
          <Col sm={8}>
    <div className='d-flex justify-content-center pt-5 mt-3'>
  
       


<Cards img={"https://heritagecenter.mn/wp-content/uploads/2022/03/2018_0826_Earle_Brown_Center_DAYTA_YuppyPhoto-2-1080x675.jpg"} title={"Workshop and Conference"} text={"A workshop is an interactive meeting in which a group of people ₹700"}/>

   <Cards img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2A55buybj93KwHh4W8O6lY2oo62WFJ-69Ng&usqp=CAU"} title={"Family Workshop Events"} text={"SDefine Your Workshop's Purpose and Goals. Workshop success is directly linked to planning, starting with setting clear goals ₹700"}/>
   
   <Cards img={"https://www.mouldmedia.in/wp-content/uploads/2023/01/19-05-29-04-05-24corporate-event-by-hire4event.jpg"} title={"Creative Workshop Events"} text={"The International Press Telecommunications Council, in conjunction with Project Origin. ₹1000"}/>
</div>
</Col>
</Row>
</Container>



</>

  );
}

export default WorkShops ;