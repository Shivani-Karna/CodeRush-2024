import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // this.changeColor = this.changeColor.bind(this);
    this.state = {
      fullName: "Damon Yadav",
    };
  }
  changeName = () => {
    console.log(this, "this");
    this.setState({ fullName: "Shivani" });
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.state.fullName}</div>
        <button onClick={this.changeName}>Change Name</button>
      </React.Fragment>
    );
  }
}
