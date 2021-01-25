import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import EventHeader from "../components/EventHeader";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_POST, ADD_MEMBER, ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/actions";
import MapComponent from "../components/Map";
import Jumbotron from "../components/Jumbotron";
import AttendingList from "../components/AttendingList";


const Detail = props => {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams()
  useEffect(() => {
    API.getPost(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_POST, post: res.data }))
      .catch(err => console.log(err));
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  const addFavorite = () => {
    API.addFavorite(id)
      .then(res => dispatch({
        type: ADD_FAVORITE,
        eventId: id
      }))
      .catch(err => console.log(err));
  };

  const removeFavorite = () => {
    API.removeFavorite(id)
    .then(res => dispatch({
      type: REMOVE_FAVORITE,
      eventId: id
    }))
    .catch(err => console.log(err));
  };

  const addMember = () => {
    dispatch({
      type: ADD_MEMBER,
      member: state.currentMember
    });
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
            < AttendingList members={state.members} />
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

                <button onClick={addMember} className="btn btn-success">Register to Attend</button>

                <Link to="/home">
                  <button type="button" class="btn btn-primary ml-3">Back to All Events</button>
                </Link>
                {state.currentMember.favoritesEvents.filter(event => event._id === id).length ? (
                  <button className="btn btn-danger mt-2" onClick={removeFavorite}>
                    Remove from Favorites!
                  </button>
                ) : (
                    <button className="btn btn-primary mt-2" onClick={addFavorite}>
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
