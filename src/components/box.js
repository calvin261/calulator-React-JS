import React, { Component } from "react";
import KeyPadComponent from "./KeyPadComponent";
import ResultComponent from "./ResultComponent";
class Box extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
      console.log(checkResult, 'as')
    } else if (this.state.result.includes("^") ){
     // console.log(this.state.result.substr(2,2), 'pote')
      checkResult = Math.pow(this.state.result.slice(0, -2),this.state.result.substr(2,2))
    }else {
      checkResult = this.state.result;
      console.log(checkResult, 'bs')
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };
  render() {
    return (
      <div>
        <ResultComponent result={this.state.result} />
        <KeyPadComponent onClick={this.onClick} />
      </div>
    );
  }
}

export default Box;
