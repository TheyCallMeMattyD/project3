import React, { useEffect } from 'react'
import { GoogleMap, LoadScript, MarkerClusterer, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_POST} from "../utils/actions";

function createKey(location) {
  return location.lat + location.lng
}

function MapComponent(props) {
  // props.match.params.id
  console.log(props)
  const [state, dispatch] = useStoreContext();
  useEffect(() => {
    API.getPost()
      .then(res => dispatch({ type: SET_CURRENT_POST, post: res.data }))
      .catch(err => console.log(err));
  }, []);

  // const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
Geocode.setApiKey("");
Geocode.setLanguage("en");
Geocode.setRegion("us");
Geocode.enableDebug();
Geocode.fromAddress(state.currentPost.location).then(
  response => {
   const lat = response.results[0].geometry.location.lat;
   const lng = response.results[0].geometry.location.lng;
   console.log(lat,lng, "LATS");
    
    console.log(response.results[0].geometry.location , "TEST");
  },
  error => {
    console.error(error);
  })
  



const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 38.900497,
  lng: -77.007507
};

const locations = [{
  
  lat: 38.900497,
  lng: -77.007507
}
  ];

  
console.log(state, "this is state")
  return (
    
    <LoadScript
      googleMapsApiKey=""
    >
      <GoogleMap
      id="marker-example"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
          <MarkerClusterer>
            {(clusterer) =>
            locations.map((location) => (
              <Marker key={createKey(location)} position={location} clusterer={clusterer} />

            ))
            }
          </MarkerClusterer>
      
    
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapComponent)