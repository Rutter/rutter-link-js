import React from "react";
import ReactDOM from "react-dom";

console.log(window.Rutter)
setTimeout(() => {
    console.log(window.Rutter)
}, 2000);

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);