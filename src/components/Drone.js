import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";


class Drone extends Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    const {
		latitude,
		timestamp,
		longitude
    } = this.props;
    return (
      <div>this.props.metric
	  </div>
    );
  }
}

const mapState = (state, ownProps) => {
  const { 
    latitude,
    timestamp,
    longitude
  } = state.droneLocation;
  return {
    latitude,
    timestamp,
    longitude
  };
};

const mapDispatch = dispatch => ({
  onLoad: () =>
    dispatch({
      type: actions.FETCH_DRONE
    })
});

export default connect(
  mapState,
  mapDispatch
)(Drone);
