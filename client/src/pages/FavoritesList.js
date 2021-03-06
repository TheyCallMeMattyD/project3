import React from "react";
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FAVORITE } from "../utils/actions";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

const FavoritesList = () => {

  const removeFavorite = (id) => {
    API.removeFavorite(id)
    .then(res => dispatch({
      type: REMOVE_FAVORITE,
      eventId: id
    }))
    .catch(err => console.log(err));
  };
  const [state, dispatch] = useStoreContext();

  return (
    <div className="container mb-5 mt-5">
      <Jumbotron/>
      <h1 className="text-center">Here's All of Your Favorite Events</h1>

      {state.currentMember.favoritesEvents.length ? (
        <List>
          <h3 className="mb-5 mt-5">Click on an Event to view in detail</h3>
          {state.currentMember.favoritesEvents.map(post => (
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <strong>
                  {post.event} by {post.organizer}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeFavorite(post._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any favorites yet!</h3> 
      )}
              <Link to="/home">
                <button type="button" class="btn btn-success ml-3 mt-5">Back to All Events</button>
              </Link>
    </div>
  );
};
export default FavoritesList;
