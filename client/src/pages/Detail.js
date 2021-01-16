import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import EventHeader from "../components/EventHeader";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_POST, ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/actions";
import MembersList from "../components/MembersList";
import MyComponent from "../components/Map";
import Jumbotron from "../components/Jumbotron";
const Detail = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getPost(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_POST, post: res.data }))
      .catch(err => console.log(err));
  }, []);

  const addFavorite = () => {
    dispatch({
      type: ADD_FAVORITE,
      post: state.currentPost
    });
  };

  const removeFavorite = () => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: state.currentPost._id
    });
  };

  return (
    <>{state.currentPost ? (
      <Container fluid>
        <Jumbotron></Jumbotron>
        <Row>
          <Col size="md-12">
            <EventHeader>
              <h1>
                Event: {state.currentPost.event} <br />
                Organized By: {state.currentPost.organizer}
              </h1>
            </EventHeader>
          </Col>
        </Row>
        <Row>
          <Col size="md-4 sm-12" >
            <h1>Members Attending</h1>
            <MembersList />
          </Col>
          <Col size="md-8 md-offset-1">
            <article>
              <h1>Event Description:</h1>
              <p>{state.currentPost.description}</p>
              <p>Date: {state.currentPost.date}</p>
              <p>Start Location: {state.currentPost.startLocation}</p>
              <p>Start Time: {state.currentPost.startTime}</p>
              <p>End Time: {state.currentPost.endTime}</p>
              <MyComponent />
            </article>
            <div className="mt-5">
              <Link to="/home">
                <button type="submit" class="btn btn-success">Register to Attend</button>
              </Link>
              <Link to="/home">
                <button type="button" class="btn btn-primary ml-3">Back to All Events</button>
              </Link>
            </div>
          </Col>
          {state.favorites.indexOf(state.currentPost) !== -1 ? (
            <button className="btn btn-danger" onClick={removeFavorite}>
              Remove from Favorites!
            </button>
          ) : (
              <button className="btn" onClick={addFavorite}>
                ❤️ Add to Favorites
              </button>
            )}
        </Row>
        <Row>

        </Row>
      </Container>
    ) : (
        <div>loading...</div>
      )}</>
  );
};

export default Detail;
