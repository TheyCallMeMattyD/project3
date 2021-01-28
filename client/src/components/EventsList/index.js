import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_EVENT, UPDATE_EVENTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import moment from "moment";
function EventsList() {
  const [state, dispatch] = useStoreContext();

  const removeEvent = id => {
    API.deleteEvent(id)
      .then(() => {
        dispatch({
          type: REMOVE_EVENT,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };
  
  useEffect(() => {
    const getEvents = () => {
      dispatch({ type: LOADING });
      API.getEvents()
        .then(results => {
          dispatch({
            type: UPDATE_EVENTS,
            events: results.data
          });
        })
        .catch(err => console.log(err));
    };
    getEvents();
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-center">All Events</h2>
      <h3 className="mb-5 mt-5 text-center">Click Event to View/Register</h3>
      {state.events.length ? (
        <List>
          {state.events.map(event => (
            <ListItem key={event._id}>
              <Link to={"/events/" + event._id}>
                <strong>
                  {event.event} by {event.organizer}<br/>
                  Date: {moment(event.date).format("MMM Do YYYY")}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeEvent(event._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any events yet!</h3>
      )}
      <div className="mt-5">     
        <Link to="CreateEvent">
          <button type="button" className="btn btn-primary">Create New Event</button>
        </Link>
        <Link to="Favorites">
          <button type="button" className="btn btn-primary ml-2">View Favorites</button>
        </Link>
      </div>
    </div>
  );
}

export default EventsList;
