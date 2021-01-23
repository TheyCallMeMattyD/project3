import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreateEventForm from "../components/CreateEventForm";

import MembersList from "../components/MembersList";
import Jumbotron from "../components/Jumbotron";

const CreateEvent = () => {
  return (
    <Container fluid>
      <Jumbotron />
      <Row>
        <Col size="md-4 sm-12" >
          <MembersList />
        </Col>
        <Col size="md-8">
          <CreateEventForm />
        </Col>
      </Row>
    </Container>
  );
};

export default CreateEvent;