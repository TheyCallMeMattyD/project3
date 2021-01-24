import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import {  LOADING, GET_MEMBERS, REMOVE_MEMBER } from "../utils/actions";

const AttendingList = (props) => {
  const [state, dispatch] = useStoreContext();

 

  const removeFromMembers = id => {
    dispatch({
      type: REMOVE_MEMBER,
      _id: id
    });
  };


  return (
    <div className="container mb-5 mt-5">
      {props.members.length ? (
        <List>
          
          {props.members.map(member => (
            <ListItem key={member._id}>
              <Link to={"/registration/" + member._id}>
                <strong>
                {member.firstName} {member.lastName}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeFromMembers(member._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>Come on and register your lazy bums!</h3> 
      )}
    </div>
  );
};

export default AttendingList;