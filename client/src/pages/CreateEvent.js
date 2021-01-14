import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";
import "../pages/styles/styles.css";
import MembersList from "../components/MembersList";

const CreateEvent = () => {
  return (
    <Container fluid>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
      <Row>
        <Col size="md-4 sm-12" >
          <MembersList />
        </Col>
        <Col size="md-6">
          <CreatePostForm />
        </Col>
        {/* <Col size="md-6 sm-12">
          <PostsList />
        </Col> */}
      </Row>
    </Container>
  );
};

export default CreateEvent;