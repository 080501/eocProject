import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
//import Drone from "./Drone";


const DroneLocation = ({ text }) => (
  <div style={{
    color: 'black', 
    background: 'yellow',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);
const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 29.76,
      lng: -95
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
		<GoogleMapReact
		  bootstrapURLKeys={{ key: "AIzaSyAOEYYW573dbeQ1wOXnf3ySMXJaVTNqMQE"}}
		  defaultCenter={this.props.center}
		  defaultZoom={this.props.zoom}
		  onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
		>
		
			<DroneLocation lat={this.props.center.lat}	lng={this.props.center.lng}		text="Drone Location"	  />
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

//export default withStyles(styles)(NowWhat);
