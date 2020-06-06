import React, { Component } from "react";
import "./Addstocks.scss";
import axios from "axios";

export default class AddStocks extends Component {
  state = {
    tickersData: [],
  };
  componentDidMount() {
    axios
      .get(`https://stocks-a6c21.firebaseio.com/tickers/.json`)
      .then((response) =>
        this.setState({
          tickersData: [...response.data],
        })
      );
    // axios
    //   .post("https://stocks-a6c21.firebaseio.com/mystocks/.json", {
    //     symbol: "imt",
    //     name: "Tcs",
    //     count: "23",
    //     price: "1111",
    //   })
    //   .then((data) => console.log(data));
  }

  render() {
    return (
      <>
        <h4 className="title ml-5">Add Stocks To My Stocks</h4>
        <div className="AddStocks">
          {this.state.tickersData.map((tickers) => (
            <div className="AddStocksTitle">
              <button className="StockButton">{tickers.symbol}</button>
              <span className="sub-title">{tickers.name}</span>
            </div>
          ))}
        </div>
      </>
    );
  }
}
