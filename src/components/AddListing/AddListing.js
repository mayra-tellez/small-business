import React from 'react';
// import { useState } from 'react';
// import GoogleMapReact from 'google-map-react';
import {
  TextField,
  Button,
  Container,
  // Divider
} from '@material-ui/core';

// API KEY - AIzaSyCqxFMhz3e7AN8RcLM_03Igc7sMqe_qnCY
// Use this key in your application by passing it with the key=API_KEY parameter.

export default function AddListing(props) {
  // console.log('state', props)

  // const AnyReactComponent = ({ text }) => <div>{text}</div>;

  // const apiKey = 'AIzaSyCqxFMhz3e7AN8RcLM_03Igc7sMqe_qnCY';

  // const [defaultCenter, setDefaultCenter] = useState({ lat: 59.95, lng: 30.33 });
  // const [defaultZoom, setDefaultZoom] = useState(11);

  // const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  // };

  return (
    <div>
      <Container maxWidth="sm">
      <form>
        <TextField
          name="name"
          label="Name"
          type="text" />
        <TextField
          name="address"
          label="Address"
          type="text" />
        <TextField
          name="hours"
          label="Hours (ex: 8AM - 9PM)"
          type="text" />
        <TextField
          name="description"
          label="Description"
          type="text" />
        <Button
          type="submit"
          className="login-button"
          variant="contained"
          color="primary">
        Save</Button>
      </form>
    </Container>
    {/* <Container style={{ width: 500, height: 500 }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </Container> */}
    </div>
  )
}