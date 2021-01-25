import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import EventHeader from "../components/EventHeader";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_POST, SET_CURRENT_MEMBER,  ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/actions";
import MembersList from "../components/MembersList";
import Jumbotron from "../components/Jumbotron";
import ContactForm from "../components/ContactForm";
const Userinfo = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getMember(props.match.params.id)
    .then(res => dispatch({ type: SET_CURRENT_MEMBER, member: res.data }))
    .catch(err => console.log(err));
     
  }, []);


  return (
    <>{state.currentMember ? (
      <Container fluid>
        <Jumbotron></Jumbotron>
        <Row>
          <Col size="md-12">
            <EventHeader>
              <h1>
               {state.currentMember.firstName} <br />
               {state.currentMember.lastName}
              </h1>
            </EventHeader>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12" >
            <h2>Members Contact</h2>
            <MembersList />
          </Col>
          <Col size="md-6 sm-12">
          <ContactForm />
            </Col>
            

        </Row>
      </Container>
    ) : (
        <div>loading...</div>
      )}</>
  );
};

export default Userinfo;
