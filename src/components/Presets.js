import React from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

class Presets extends React.Component {
  render() {
    return (
      <div className="center">
        <h4>Selection</h4>
        <Button variant="outline-light" size="sm" onClick={this.props.glider}>
          Glider
        </Button>
        <Button variant="outline-light" size="sm" onClick={this.props.pentaDecathlon}>
          Pentadecathlon
        </Button>
      </div>
    )
  }
}

export default Presets
