import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const Cards = (props) => {
  return (
    <>
      <div>
        <Card style={{ width: "16rem", height: "25rem", margin: "8px" }}>
          <Card.Img
            variant="top"
            src={props.image}
            style={{ height: "20rem" }}
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Button>Book</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Cards;
