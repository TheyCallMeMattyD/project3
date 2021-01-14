import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreatePostForm() {
  const eventRef = useRef();
  const descriptionRef = useRef();
  const organizerRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      event: eventRef.current.value,
      description: descriptionRef.current.value,
      organizer: organizerRef.current.value
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
  };

  return (
    <div>
      <h1>Create a New Event</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={eventRef} placeholder="Event Name" />
        <textarea className="form-control mb-5" required ref={descriptionRef} placeholder="Description" />
        <input className="form-control mb-5" ref={organizerRef} placeholder="Organizer" />
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Save Event
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
