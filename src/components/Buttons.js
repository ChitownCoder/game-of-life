import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

class Buttons extends React.Component {
  handleSelect = e => {
    this.props.gridSize(e);
  };

  render() {
    return (
      <div className="center">
        <h4>Controls</h4>
        <ButtonToolbar>
          <Button
            variant="outline-light"
            size="sm"
            onClick={this.props.playButton}
          >
            <img src="https://img.icons8.com/doodle/48/000000/youtube-play--v1.png" alt="Play"/>
          </Button>
          <Button
            variant="outline-light"
            size="sm"
            onClick={this.props.pauseButton}
          >
            <img src="https://img.icons8.com/doodle/48/000000/circled-pause.png" alt="Pause" />
          </Button>
          <Button variant="outline-light" size="sm" onClick={this.props.clear}>
          <img src="https://img.icons8.com/doodle/48/000000/delete-sign.png" alt="Delete"/>
          </Button>
          <Button variant="outline-light" size="sm" onClick={this.props.slow}>
          <img src="https://img.icons8.com/color/48/000000/snail.png" alt="Slow"/>
          </Button>
          <Button variant="outline-light" size="sm" onClick={this.props.fast}>
          <img src="https://img.icons8.com/doodle/48/000000/fast-forward--v3.png" alt="fast"/>
          </Button>
          <Button variant="outline-light" size="sm" onClick={this.props.seed}>
          <img src="https://img.icons8.com/doodle/48/000000/shuffle.png" alt="Random"/>
          </Button>
         
          <DropdownButton 
            
            variant="outline-light"
            size="sm"
            title="Grid Size"
            id=" dropdown-basic-button"
            onSelect={this.handleSelect}
          >
            <DropdownItem>50x50</DropdownItem>
            <DropdownItem eventKey="1">75x75</DropdownItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Buttons;