import React from "react";

class Box extends React.Component {
  selectBox = () => {
    this.props.selectBox(this.props.row, this.props.col);
  };

  render() {
    return (
      <div className="footer">
        <h3>2020 &copy; Anthony Donovan</h3>
      </div>
      );
  }
}

export default Box;
