import React from "react";
import { ListItem, List } from "../components/List";
import { REMOVE_ATTENDEE } from "../utils/actions";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";



const AttendingList = (props) => {
  const [state, dispatch] = useStoreContext();
  const removeAttendee = (id) => {
    API.removeAttendee(id)
    .then(res => dispatch({
      type: REMOVE_ATTENDEE,
      attendeeId: id
    }))
    .catch(err => console.log(err));
  };
console.log(props, "propssss");


  return (
    <div className="container mb-5 mt-5">
   
     

      {state.currentPost.addsAttendee.length ? (
        <List>
          
          {state.members.filter(member => state.currentPost.addsAttendee.includes(member._id)).map(member => (
            <ListItem key={member._id}>
              <Link to={"/registration/" + member._id}>
                <strong>
                  {member.email}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeAttendee(member._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>Come on and sign up you lazy bums!!</h3> 
      )}
              
    </div>
  );
};

export default AttendingList;
