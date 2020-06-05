import React, { Component } from "react";
import "./App.css";
import Navbar from "../src/component/Navbar";
import Table from "../src/component/Table";
import Stocks from "../src/component/Stocks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Table />
        <Stocks />
      </div>
    );
  }
}

export default App;
