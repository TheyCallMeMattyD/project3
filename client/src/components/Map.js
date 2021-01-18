import React from 'react'
import { GoogleMap, LoadScript, MarkerClusterer, Marker } from '@react-google-maps/api';
// const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
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
},
{lat: 38.8719,
lng: -77.0563}

]
function createKey(location) {
  return location.lat + location.lng
}



const onLoad =  marker => {
    console.log( 'marker:', marker)
  }


function MyComponent() {
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

export default React.memo(MyComponent)