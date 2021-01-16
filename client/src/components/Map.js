import React from 'react'
import { GoogleMap, LoadScript, BicyclingLayer } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 38.900497,
  lng: -77.007507
};

const onLoad = bicyclingLayer => {
    console.log('bicyclingLayer: ', bicyclingLayer)
  }

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAOV69F_N2yG4trM3Oy8G5slCBcIHCIeV0"
    >
      <GoogleMap
      id="bicycling-example"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
          <BicyclingLayer
      onLoad={onLoad}
    />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)