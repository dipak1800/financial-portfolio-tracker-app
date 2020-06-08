import React, { Component } from "react";
import "./Addstocks.scss";
import axios from "axios";

export default class AddStocks extends Component {
  state = {
    tickersData: [],
    totalTickers: null,
    currentPrice: null,
  };
  getTickers = () => {
    axios.get(`https://stocks-a6c21.firebaseio.com/.json`).then((response) =>
      response.data !== null
        ? this.setState({
            tickersData: [...Object.entries(response.data)],
            totalTickers: Object.keys(response.data).length,
          })
        : null
    );
    // axios
    //   .post("https://stocks-a6c21.firebaseio.com/mystocks/.json", {
    //     symbol: "imt",
    //     name: "Tcs",
    //     count: "23",
    //     price: "1111",
    //   })
    //   .then((data) => console.log(data));
  };

  componentDidMount() {
    this.getTickers();
  }
  componentDidUpdate() {
    this.getTickers();
  }
  selectStock = (e) => {
    e.preventDefault();
    // console.log(e.target.value, e.target.name, e.target.id);
    const Buttonvalue = e.target.value;
    const Buttonname = e.target.name;
    const ButtonId = e.target.id;
    console.log(Buttonvalue, ButtonId, Buttonname);

    axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${e.target.value}&apikey=XGVQUV2Z5VMGJYAU`
      )
      .then((response) => {
        // console.log(response.data["Time Series (Daily)"]);
        let dailyData = response.data["Time Series (Daily)"];
        let dailyData_Latest_close = Object.values(dailyData)[0]["4. close"];
        console.log(dailyData_Latest_close);
        this.setState({
          currentPrice: dailyData_Latest_close,
        });
        this.props.currentPrice(
          this.state.currentPrice,
          true,
          Buttonname,
          Buttonvalue,
          ButtonId
        );
      });
  };

  render() {
    return (
      <>
        <h4 className="title ml-5">
          Add Stocks To My Stocks <i class="icon fas fa-plus-square"></i>
        </h4>
        {this.state.totalTickers ? (
          this.state.totalTickers > 3 ? (
            <div className="AddStocks">
              {this.state.tickersData.map(
                (ticker) =>
                  ticker !== "mystocks" && (
                    <div className="AddStocksTitle" key={ticker[0]}>
                      <button
                        className="StockButton"
                        name={ticker[1].name}
                        id={ticker[0]}
                        onClick={this.selectStock}
                        value={ticker[1].symbol}
                      >
                        {ticker[1].symbol}
                      </button>
                      <span className="sub-title">{ticker[1].name}</span>
                    </div>
                  )
              )}
            </div>
          ) : (
            <h3 className="limit text-center">
              You are not allowed to add more than 5 stocks! <br /> Remove some
              stocks if you want to add a new stock.
            </h3>
          )
        ) : null}
      </>
    );
  }
}
