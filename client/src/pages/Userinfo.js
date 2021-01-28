import React, { useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import EventHeader from "../components/EventHeader";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import {  SET_CURRENT_MEMBER, } from "../utils/actions";

import Jumbotron from "../components/Jumbotron";
import ContactForm from "../components/ContactForm";
const Userinfo = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getMember(props.match.params.id)
    .then(res => dispatch({ type: SET_CURRENT_MEMBER, member: res.data }))
    .catch(err => console.log(err));
     
  }, [props.match.params.id, dispatch]);

  return (
    <>{state.currentMember ? (
      <Container fluid>
        <Jumbotron />
        <Row>
          <Col size="md-12">
            <EventHeader>
              <h1>
               {state.currentMember.firstName} <br />
               {state.currentMember.lastName} 
               </h1>
               <br />
               <h2>
               {state.currentMember.email}
               </h2>
             
            </EventHeader>
          </Col>
        </Row>
        <Row>
        
          <Col size="md-12">
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
