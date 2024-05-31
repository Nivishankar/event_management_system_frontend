// import Accordion from "react-bootstrap/Accordion";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/esm/Container";
// import axios from "axios";
// import { useState } from "react";
// import Cards from "./Cards";

// function Filters() {
//   const [eventData, setEventData] = useState([]);
//   const eventFun = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/active");
//       setEventData(response.data.data);
//       <Cards data={eventData} />;
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   return (
//     <>
//       <Container className="d-flex">
//         <div className="text-center mt-5 pt-5">
//           <h3>Filters</h3>
//           <br />
//           <Accordion style={{ width: "15rem" }}>
//             <Accordion.Item eventKey="0">
//               <Accordion.Header>Active</Accordion.Header>
//               <Accordion.Body>
//                 <input
//                   type="button"
//                   className="ms-2"
//                   value="Today"
//                   on
//                   Click={eventFun}
//                 />
//                 <input type="button" className="mx-1" value="Tommorow" />

//                 <Form.Check aria-label="option 1" type="date" />
//               </Accordion.Body>
//             </Accordion.Item>

//             <Accordion.Item eventKey="2">
//               <Accordion.Header>Locations</Accordion.Header>
//               <Accordion.Body>
//                 <input type="button" className="mx-1" />
//               </Accordion.Body>
//             </Accordion.Item>

//             <Accordion.Item eventKey="3">
//               <Accordion.Header>Organizer name</Accordion.Header>
//               <Accordion.Body>
//                 <input type="button" className="mx-1" value="Music" />
//                 <input type="button" className="mx-1" value="Workshop" />
//                 <input type="button" className="mx-1" value="Stand-Up" />
//               </Accordion.Body>
//             </Accordion.Item>
//           </Accordion>
//         </div>
//       </Container>
//     </>
//   );
// }

// export default Filters;

import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
// import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Cards from "./Cards";

function Filters() {
  const [eventData, setEventData] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Today");

  useEffect(() => {
    // Fetch events when the component mounts
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getactive");
      setEventData(response.data.data);
      // Initially set filteredEvents to all events
      setFilteredEvents(response.data.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const filterEvents = (filter) => {
    setActiveFilter(filter);
    let filteredData = [];

    // Filter events based on the selected filter
    if (filter === "Today") {
      filteredData = eventData.filter(
        (event) => event.startDate === Date.now()
      );
    } else if (filter === "Tomorrow") {
      filteredData = eventData.filter((event) => event.startDate > Date.now());
    }
    // Add more conditions for other filters
    else {
      filteredData = eventData.filter((event) => event.startDate < Date.now());
    }

    setFilteredEvents(filteredData);
  };

  return (
    <Container className="d-flex">
      <div className="text-center mt-5 pt-5">
        <h3>Filters</h3>
        <br />
        <Accordion style={{ width: "15rem" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Active</Accordion.Header>
            <Accordion.Body>
              <input
                type="button"
                className={`ms-2 ${activeFilter === "Today" ? "active" : ""}`}
                value="Today"
                onClick={() => filterEvents("Today")}
              />
              <input
                type="button"
                className={`mx-1 ${
                  activeFilter === "Tomorrow" ? Date.now() : ""
                }`}
                value="Tomorrow"
                onClick={() => filterEvents("Tomorrow")}
              />
              {/* Add more buttons for other filters */}
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more Accordion.Item for other filters */}
        </Accordion>
      </div>
      <div className="events-container">
        <div className="event-cards">
          {/* Render filtered events */}
          {filteredEvents.map((event) => (
            <Cards key={event.id} data={event} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Filters;
