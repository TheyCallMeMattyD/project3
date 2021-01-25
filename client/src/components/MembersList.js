import React, { useEffect } from "react";
import { ListItem, List } from "./List";
import DeleteBtn from "./DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_MEMBER, UPDATE_MEMBERS, LOADING } from "../utils/actions";
import API from "../utils/API";

function MembersList() {
  const [state, dispatch] = useStoreContext();

  const removeMember = id => {
    API.deleteMember(id)
      .then(() => {
        dispatch({
          type: REMOVE_MEMBER,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };

  const getMembers = () => {
    dispatch({ type: LOADING });
    API.getMembers()
      .then(results => {
        dispatch({
          type: UPDATE_MEMBERS,
          members: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div>
    
      <h7 className="mb-5 mt-5">Click to Contact</h7>
      {state.members.length ? (
        <List>
          {state.members.map(member => (
            <ListItem key={member._id}>
              <Link to={"/members/" + member._id}>
                <strong>
                  @{member.firstName}{member.lastName}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeMember(member._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>Find some peeps!!</h3>
      )}
    </div>
  );
}

export default MembersList;
