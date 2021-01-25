import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import {  LOADING, GET_MEMBERS, REMOVE_MEMBER } from "../utils/actions";

const Registration = () => {
  const [state, dispatch] = useStoreContext();

  const getMembers = () => {
    dispatch({ type: LOADING });
    dispatch({ type: GET_MEMBERS });
  };

  const removeFromMembers = id => {
    dispatch({
      type: REMOVE_MEMBER,
      _id: id
    });
  };

  useEffect(() => {
    getMembers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container mb-5 mt-5">
     

      {state.members.length ? (
        <List>
          <h3 className="mb-5 mt-5">Click on an Event to view in detail</h3>
          {state.members.map(member => (
            <ListItem key={member._id}>
              <Link to={"/registration/" + member._id}>
                <strong>
                  @{member.firstName}{member.lastName}
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

export default Registration;