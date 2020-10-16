import React from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
class Presets extends React.Component {
  render() {
    return (
      <div className="center">
        <h4>Presets</h4>
        <ButtonToolbar>
          <Button variant="outline-light" size="sm" onClick={this.props.glider}>
          <img src="https://img.icons8.com/color/48/000000/in-air.png" alt="Glider"/>
          </Button>
          <Button
            variant="outline-light"
            size="sm"
            onClick={this.props.pulsar}
          >
            <img src="https://img.icons8.com/color/48/000000/flower-doodle.png" alt="Pulsar"/>
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Presets
