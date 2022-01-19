import logo from "./logo.svg";
import "./App.css";
import React from "react";
import reactDom from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exp: "", color: "" };
  }
  press = (e) => {
    this.setState({ exp: this.state.exp + e.target.textContent });
  };
  clearAll = (e) => {
    this.setState({ color: "white", exp: "" });
    console.log(e);
  };
  onCompute = () => {
    this.setState({ exp: eval(this.state.exp) });
  };
  sqtr = () => {
    this.setState({ exp: eval(Math.sqrt(this.state.exp)) });
  };
  onMouseEnter = (e) => {
    e.target.style.background = "red";
  };
  onMouseLeave = (e) => {
    e.target.style.background = "white";
  };
  keyPress = (e) => {
    console.log(e.key);
    let arr = ["+", "-", "*", "/", "%"];
    if (e.key >= 0 && e.key <= 9) {
      this.setState({ exp: this.state.exp + e.key });
      //exp.state.style.background = "red";
    } else if (arr.includes(e.key)) {
      this.setState({ exp: this.state.exp + e.key });
    } else if (e.key === "Enter") {
      this.setState({ exp: eval(this.state.exp) });
      e.target.style.background = "yellow";
    } else if (e.key === "=") {
      this.setState({ exp: eval(this.state.exp) });
      e.target.style.background = "yellow";
    } else if (e.key === "Backspace") {
      this.setState({ exp: this.state.exp.slice(0, -1) });
    } else if (e.key === "c") {
      e.target.style.background = "";
      console.log(e);
    } else {
      //alert("enter numbers only in calculator");
    }
  };
  backSpace = () => {
    this.setState({ exp: this.state.exp.slice(0, -1) });
  };
  render() {
    let { exp } = this.state;

    return (
      <div className="container">
        <input
          style={{ background: this.state.color }}
          className="item"
          onKeyPress={this.keyPress}
          value={exp}
          readOnly
        ></input>
        <div
          className="item1"
          onClick={this.press}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          1
        </div>
        <div
          className="item2"
          onClick={this.press}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          2
        </div>
        <div
          className="item3"
          onClick={this.press}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          3
        </div>
        <div
          className="item4"
          onClick={this.press}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          4
        </div>
        <div
          className="item5"
          onClick={this.press}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          5
        </div>
        <div
          className="item6"
          onClick={this.press}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          6
        </div>
        <div
          className="item7"
          onClick={this.press}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          7
        </div>
        <div
          className="item8"
          onClick={this.press}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          8
        </div>
        <div
          className="item9"
          onClick={this.press}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          9
        </div>
        <div
          className="itema"
          onClick={this.press}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          +
        </div>
        <div
          className="itemb"
          onClick={this.press}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          -
        </div>
        <div
          className="itemc"
          onClick={this.press}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          *
        </div>
        <div
          className="itemd"
          onClick={this.press}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          /
        </div>
        <div
          className="iteme"
          onClick={this.clearAll}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          c
        </div>
        <div
          className="itemf"
          onClick={this.press}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          0
        </div>
        <div className="itemg" onClick={this.onCompute}>
          =
        </div>
        <div
          className="itemh"
          onClick={this.backSpace}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          Backspace
        </div>
        <div
          className="itemi"
          onClick={this.sqtr}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          Sqrt
        </div>
        <div
          className="itemj"
          onClick={this.press}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          .
        </div>
      </div>
    );
  }
}

export default App;
