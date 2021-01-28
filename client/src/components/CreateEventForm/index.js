import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function CreateEventForm() {
  const history = useHistory();
  const eventRef = useRef();
  const descriptionRef = useRef();
  const locationRef = useRef();
  const destinationRef = useRef();
  const dateRef = useRef();
  const startTimeRef = useRef();
  const endTimeRef = useRef();
  const [state, dispatch] = useStoreContext();
  console.log(state);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      event: eventRef.current.value,
      description: descriptionRef.current.value,
      location: locationRef.current.value,
      destination: destinationRef.current.value,
      startTime: startTimeRef.current.value,
      endTime: endTimeRef.current.value,
      organizer: state.currentMember.fullName,
      date: dateRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
        history.push("/home")
      })
      .catch((error) => {
        if (error.response.status === 401) {
          history.push('/login')
        }
    });

    eventRef.current.value = "";
    descriptionRef.current.value = "";
    locationRef.current.value = "";
    destinationRef.current.value = "";
    startTimeRef.current.value = "";
    endTimeRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <div>
      <h2>Create a New Event</h2>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={eventRef} placeholder="Event Name" />
        <textarea className="form-control mb-5" required ref={descriptionRef} placeholder="Description" />
        <input className="form-control mb-5" required ref={locationRef} placeholder="Start Location" />
        <input className="form-control mb-5" required ref={destinationRef} placeholder="Destination" />
        <input type="date" className="form-control mb-5" required ref={dateRef} placeholder="Date" />
        <input type="time" className="form-control mb-5" required ref={startTimeRef} placeholder="Start Time" />
        <input type="time" className="form-control mb-5" required ref={endTimeRef} placeholder="End Time" />
        <div class="text-center">
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Save Event
        </button>
        <Link to="/home">
        <button className="btn btn-primary mt-3 mb-5 ml-2" type="button">
          Return to All Events
        </button>
        </Link>
        </div>
      </form>
    </div>
  );
}

export default CreateEventForm;
