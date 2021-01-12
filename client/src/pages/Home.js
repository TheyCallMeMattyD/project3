import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";
import "../pages/styles/styles.css";

const Home = () => {
  return (
    <Container fluid>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Fluid jumbotron</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
      <Row>
        <Col size="md-4 sm-12" >
          <p class="members" >Members list</p>
        </Col>
        {/* <Col size="md-6">
        temporary
          <CreatePostForm />
        </Col> */}
        <Col size="md-6 sm-12">
          <PostsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
