import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreateEventForm() {
  const eventRef = useRef();
  const descriptionRef = useRef();
  const locationRef = useRef();
  const destinationRef = useRef();
  const startTimeRef = useRef();
  const endTimeRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
    
      event: eventRef.current.value,
      description: descriptionRef.current.value,
      location: locationRef.current.value,
      destination: destinationRef.current.value,
      startTime: startTimeRef.current.value,
      endTime: endTimeRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    eventRef.current.value = "";
    descriptionRef.current.value = "";
    locationRef.current.value = "";
    destinationRef.current.value = "";
    startTimeRef.current.value = "";
    endTimeRef.current.value = "";
  };

  return (
    <div>
      <h2>Create a New Event</h2>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={eventRef} placeholder="Event Name" />
        <textarea className="form-control mb-5" required ref={descriptionRef} placeholder="Description" />
        <input className="form-control mb-5" required ref={locationRef} placeholder="Start Location" />
        <input className="form-control mb-5" required ref={destinationRef} placeholder="Destination" />
        <input className="form-control mb-5" required ref={startTimeRef} placeholder="Start Time" />
        <input className="form-control mb-5" required ref={endTimeRef} placeholder="End Time" />
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Save Event
        </button>
      </form>
    </div>
  );
}

export default CreateEventForm;
