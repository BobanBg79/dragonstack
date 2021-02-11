import React from "react";
import { connect } from "react-redux";
import { fetchDragon } from "../actions/dragon";
import { Button } from "react-bootstrap";

class Dragon extends React.Component {
  componentDidMount() {
    this.props.fetchDragon();
  }

  render() {
    const {
      dragonId,
      nickname,
      birthdate,
      generationId,
      traits,
    } = this.props.dragon;
    return (
      <div>
        <h2>Dragon section</h2>
        <div>Dragon id: {dragonId}</div>
        <div>Dragon generation id: {generationId}</div>
        {traits && (
          <div>
            <p>Traits: </p>
            {traits.map((trait) => trait.traitValue).join(", ")}
          </div>
        )}
        <div>
          <Button className="btn-primary" onClick={this.props.fetchDragon}>
            Create new Dragon
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(({ dragon }) => ({ dragon }), { fetchDragon })(Dragon);
