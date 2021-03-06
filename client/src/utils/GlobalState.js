import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_POST,
  SET_CURRENT_MEMBER,
  REMOVE_POST,
  REMOVE_MEMBER,
  UPDATE_POSTS,
  GET_MEMBERS,
  SET_MEMBERS,
  UPDATE_LOCATION,
  UPDATE_DESTINATION,
  ADD_POST,
  ADD_MEMBER,
  ADD_FAVORITE,
  ADD_ATTENDEE,
  REMOVE_ATTENDEE,
  REMOVE_FAVORITE,
  LOADING,
  CLEARSTORAGE
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_POST:
    return {
      ...state,
      currentPost: action.post,
      loading: false
    };
  case SET_CURRENT_MEMBER:
    console.log(action)
    return {
      ...state,
      currentMember: action.member,
      loading: false
    };

  case UPDATE_POSTS:
    return {
      ...state,
      posts: [...action.posts],
      loading: false
    };
  case GET_MEMBERS:
    return {
      ...state,
      loading: false
    };
  case SET_MEMBERS:
    return {
      ...state,
      members: [...action.members],
      loading: false
    };
  case UPDATE_LOCATION:
    return {
      ...state,
      currentLocation: action.location,
      loading: false
    };
  case UPDATE_DESTINATION:
    return {
      ...state,
      currentDestination: action.destination,
      loading: false
    };
  case ADD_POST:
    return {
      ...state,
      posts: [action.post, ...state.posts],
      loading: false
    };
  case ADD_MEMBER:
    return {
      ...state,
      members: [...state.members, action.member],
      loading: false
    };
  case REMOVE_POST:
    return {
      ...state,
      posts: state.posts.filter((post) => {
        return post._id !== action._id; 
      })
    };
  case REMOVE_MEMBER:
    return {
      ...state,
      members: state.members.filter((member) => {
        return member._id !== action._id; 
      })
    };
  case ADD_FAVORITE:
    return {
      ...state,
      currentMember: {
        ...state.currentMember,
        favoritesEvents: [...state.posts.filter(event => event._id === action.eventId), ...state.currentMember.favoritesEvents]
      },
      loading: false
    };
  case ADD_ATTENDEE:
    return {
      ...state,
      currentPost: {
        ...state.currentPost,
        addsAttendee: [state.members.filter(attendee => attendee._id === action.attendeeId)[0]._id, ...state.currentPost.addsAttendee]
      },
      loading: false
    };
  case REMOVE_FAVORITE:
    return {
      ...state,
      currentMember: {
        ...state.currentMember,
        favoritesEvents: state.currentMember.favoritesEvents.filter(event => {
          return event._id !== action.eventId; 
        })
      },
      loading: false
    };
  case REMOVE_ATTENDEE:
    return {
      ...state,
      currentPost: {
        ...state.currentPost,
        addsAttendee: state.currentPost.addsAttendee.filter(attendeeId => {
          return attendeeId !== action.attendeeId; 
        })
      },
      loading: false
    };
  case LOADING:
    return {
      ...state,
      loading: true
    };
    case CLEARSTORAGE:
      return {
        posts: [],
        currentPost: {
          _id: 0,
          event: "",
          description: "",
          organizer: "",
          location: "",
          startTime: "",
          endTime: "",
          addsAttendee: []
        },
        members: [],
        currentMember: {
          _id: 0,
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          favoritesEvents: []
        },
        loading: false,
        locations: [],
        currentLocation: {
          lat: 0,
          lng: 0
        },
        destinations: [],
        currentDestination: {
          lat: 0,
          lng: 0
        }
      }
  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    currentPost: {
      _id: 0,
      event: "",
      description: "",
      organizer: "",
      location: "",
      startTime: "",
      endTime: "",
      addsAttendee: []
    },
    members: [],
    currentMember: {
      _id: 0,
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      favoritesEvents: []
    },
    loading: false,
    locations: [],
    currentLocation: {
      lat: 0,
      lng: 0
    },
  
    destinations: [],
    currentDestination: {
      lat: 0,
      lng: 0
    }
    
  }

  
  );

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
