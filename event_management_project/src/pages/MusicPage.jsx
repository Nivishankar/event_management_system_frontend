// import React, { useEffect, useState } from "react";
// import Cards from "../components/Cards";
// import Filters from "../components/Filters";
// import NavBars from "../components/NavBars";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import axios from "axios";

// function MusicPage() {
//   const [events, setEvents] = useState();

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/get");
//         setEvents(response.data.data);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       }
//     };
//     fetchEvents();
//   }, [events]);

//   return (
//     <>
//       <NavBars />
//       <Container>
//         <Row>
//           <Col sm={4}>
//             <Filters />
//           </Col>
//           <Col sm={8}>
//             <Row>
//               {events.map((category, index) => (
//                 <Col key={index} xs={12} md={6} lg={4}>
//                   <Cards
//                     image={category.image}
//                     title={category.title}
//                     description={category.description}
//                   />
//                 </Col>
//               ))}
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default MusicPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBars from "../components/NavBars"; // Import your NavBars component
import Filters from "../components/Filters"; // Import your Filters component
import Cards from "../components/Cards"; // Import your Cards component

function MusicPage() {
  // State to hold the fetched events
  const [events, setEvents] = useState([]);

  // Fetch events from the server when component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/get");
        setEvents(response.data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <>
      <NavBars />
      <Container>
        <Row>
          <Col sm={8}>
            <Row>
              {events.map((event, index) => (
                <Col key={index} xs={12} md={6} lg={4}>
                  <Cards
                    image={event.image}
                    title={event.title}
                    description={event.description}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col sm={4}>
            <Filters />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MusicPage;
