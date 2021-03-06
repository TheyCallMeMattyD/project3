import React from "react";
import { Col, Row, Container } from "../components/Grid";
import PostsList from "../components/PostsList";
import MembersList from "../components/MembersList";
import Jumbotron from "../components/Jumbotron";
import "../index.css"
const Home = () => {
  return (
    <Container fluid>
      <Jumbotron />
      <Row>
        <Col size="md-4 sm-12" >
        <h2>All Members</h2>
          <MembersList />
        </Col>
        <Col size="md-8 sm-12">
          <PostsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
