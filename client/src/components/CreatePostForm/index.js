import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreatePostForm() {
  const eventRef = useRef();
  const descriptionRef = useRef();
  const organizerRef = useRef();
  const locationRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  const dateRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      event: eventRef.current.value,
      description: descriptionRef.current.value,
      organizer: organizerRef.current.value,
      date: dateRef.current.value,
      location: locationRef.current.value,
      startTime: startRef.current.value,
      endTime: endRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    eventRef.current.value = "";
    dateRef.current.value = "";
    descriptionRef.current.value = "";
    organizerRef.current.value = "";
    locationRef.current.value = "";
    startRef.current.value = "";
    endRef.current.value = "";
  };

  return (
    <div>
      <h2>Create a New Event</h2>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={eventRef} placeholder="Event Name" />
        <input className="form-control mb-5" required ref={dateRef} placeholder="Event Date" />
        <textarea className="form-control mb-5" required ref={descriptionRef} placeholder="Description" />
        <input className="form-control mb-5" required ref={locationRef} placeholder="Start Location" />
        <input className="form-control mb-5" required ref={startRef} placeholder="Start Time" />
        <input className="form-control mb-5" required ref={endRef} placeholder="End Time" />
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Save Event
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
