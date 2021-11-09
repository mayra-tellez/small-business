import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PersonPinIcon from '@material-ui/icons/PersonPin';

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.249,
      lng: -97.749
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCqxFMhz3e7AN8RcLM_03Igc7sMqe_qnCY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <PersonPinIcon
            lat={30.249}
            lng={-97.749}
            color="secondary"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;