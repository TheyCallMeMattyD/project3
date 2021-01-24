import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreateEventForm from "../components/CreateEventForm";
import Jumbotron from "../components/Jumbotron";

const CreateEvent = () => {
  return (
    <Container fluid>
      <Jumbotron />
      <Row>
        <Col size="md-10">
          <CreateEventForm />
        </Col>
      </Row>
    </Container>
  );
};

export default CreateEvent;