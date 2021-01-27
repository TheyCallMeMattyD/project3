import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import EventHeader from "../components/EventHeader";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_POST, ADD_ATTENDEE, ADD_FAVORITE, REMOVE_FAVORITE, REMOVE_ATTENDEE } from "../utils/actions";
import MapComponent from "../components/Map";
import Jumbotron from "../components/Jumbotron";
import AttendingList from "../components/AttendingList";

const Detail = props => {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
 
  useEffect(() => {
    // API.getMember(props.match.params.id)
    //   .then(res => dispatch({ type: SET_CURRENT_MEMBER, member: res.data }))
    //   .catch(err => console.log(err));
    API.getPost(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_POST, post: res.data }))
      .catch(err => console.log(err));
  }, [/*dispatch, props.match.params.id*/]);

//    useEffect(() => {

//  }, [/*dispatch, props.match.params.id*/]);

  const addFavorite = () => {
    API.addFavorite(id)
      .then(_ => dispatch({
        type: ADD_FAVORITE,
        eventId: id
      }))
      .catch(err => console.log(err));
  };

  const addAttendee = () => {
    API.addAttendee(id)
      .then(_ => dispatch({
        type: ADD_ATTENDEE,
        attendeeId: state.currentMember._id
      }))
      .catch(err => console.log(err));
  };

  const removeFavorite = () => {
    API.removeFavorite(id)
    .then(_ => dispatch({
      type: REMOVE_FAVORITE,
      eventId: id
    }))
    .catch(err => console.log(err));
  };

  const removeAttendee = () => {
    API.removeAttendee(id)
    .then(_ => dispatch({
      type: REMOVE_ATTENDEE,
      attendeeId: state.currentMember._id
    }))
    .catch(err => console.log(err));
  };


  console.log(state, "state")

  return (
    <div>
    {state.currentPost ? (
      <Container fluid>
        <Jumbotron />
        <Row>
          <Col size="md-12">
            <EventHeader>
              <h1>
                Event: {state.currentPost.event} <br />
                Organized By: { }
              </h1>
            </EventHeader>
          </Col>
        </Row>
        <Row>
          <Col size="md-3 sm-12" >
            <h2 class="text-center">Members Attending</h2>
            <AttendingList />
          </Col>
          <Col size="md-5 sm-12">
            <article>
              <h2 class="text-center">Event Description:</h2>
              <h3>{state.currentPost.description}</h3>
              <p>Date: {state.currentPost.date}</p>
              <p>Start Location: {state.currentPost.location}</p>
              <p>Destination: {state.currentPost.destination}</p>
              <p>Start Time: {state.currentPost.startTime}</p>
              <p>End Time: {state.currentPost.endTime}</p>
              <div className="mt-5 text-center">
              <Link to="/home">
               <button type="button" class="btn btn-success mt-2 ml-2">Back to All Events</button>
             </Link>
              {state.currentPost.addsAttendee.filter(attendeeId => attendeeId === state.currentMember._id).length ? (
                  <button className="btn btn-danger mt-2 ml-2" onClick={removeAttendee}>
                    Cancel Registration
                  </button>
                ) : (
                    <button className="btn btn-primary mt-2 ml-2" onClick={addAttendee}>
                      <span role="img" aria-label="heart">❤️</span> Register
                    </button>
                  )}
                {state.currentMember.favoritesEvents.filter(event => event._id === id).length ? (
                  <button className="btn btn-danger mt-2 ml-2" onClick={removeFavorite}>
                    Remove from Favorites!
                  </button>
                ) : (
                    <button className="btn btn-primary mt-2 ml-2" onClick={addFavorite}>
                      <span role="img" aria-label="heart">❤️</span> Add to Favorites
                    </button>
                  )}
              </div>
            </article>
          </Col>
          <Col size="md-4 sm-12">
            <MapComponent />
          </Col>
        </Row>
      </Container>
    ) : (
        <div>loading...</div>
      )}
      </div>
  );
 
};

export default Detail;
