import React from "react";
import { connect } from "react-redux";
import { fetchGeneration } from "../actions/generation";

const MINIMUM_DELAY = 3000;

class Generation extends React.Component {
  timer = null;

  fetchTheNextGeneration = () => {
    this.props.fetchGeneration();
    const expir = new Date(this.props.generation.expiration).getTime();
    const now = new Date().getTime();
    let delay = expir - now;
    if (delay < MINIMUM_DELAY) {
      delay = MINIMUM_DELAY;
    }

    this.timer = setTimeout(() => this.fetchTheNextGeneration(), delay);
  };

  componentDidMount() {
    this.fetchTheNextGeneration();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  render() {
    const { generationId, expiration } = this.props.generation;
    return (
      <div>
        <p>Generation id: {generationId}</p>
        <p>Expires on: {new Date(expiration).toString()}</p>
      </div>
    );
  }
}

const mapState = (state) => {
  const { generation } = state;
  return { generation };
};

export default connect(mapState, { fetchGeneration })(Generation);
