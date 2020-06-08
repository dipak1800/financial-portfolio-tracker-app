import React, { Component } from "react";
import "./modal.css";
import Axios from "axios";

export default class Modal extends Component {
  state = {
    modalFlag: false,
    inputFlag: true,
    numberOfShares: null,
    buyPrice: null,
    buydate: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addStock = (e) => {
    e.preventDefault();

    const profit_Loss =
      (this.props.currentPrice - this.state.buyPrice) *
      this.state.numberOfShares;
    Axios.post(`https://stockspost-9c52a.firebaseio.com/.json`, {
      stocksymbol: this.props.stockSymbol,
      stockname: this.props.stockName,
      Noofshares: this.state.numberOfShares,
      buyprice: this.state.buyPrice,
      date: this.state.buydate,
      currentPrice: this.props.currentPrice,
      profit_Loss,
    }).then((posted) => console.log(posted));
    console.log(this.props.buttonId);
    Axios.delete(
      `https://stocks-a6c21.firebaseio.com/${this.props.buttonId}.json`
    );
    let data = {
      shareCount: this.state.numberOfShares,
      buy_price: this.state.buyPrice,
      stockName: this.props.stockName,
      stockSymbol: this.props.stockSymbol,
      currentPrice: this.props.currentPrice,
      profit_Loss,
    };

    this.props.addStock(
      false,
      this.state.numberOfShares,
      this.state.buyPrice,
      data
    );
  };
  closeModal = () => {
    this.props.closeModal(false);
  };
  render() {
    return (
      <div className="backdrop">
        <div className="AddStockForm">
          <h3 className="StockCompany">
            Add {this.props.stockName} to My Stocks
          </h3>
          <form onSubmit={this.addStock}>
            <div className="DEDCORATE">
              <label htmlFor="Company-Name">
                <h5 className="subject">Company Name:</h5>
              </label>
              <h6 className="companyName">{this.props.stockName}</h6>
            </div>
            <div className="DEDCORATE">
              {" "}
              <label htmlFor="  No. of Shares  ">
                <h5>No. of Shares:</h5>
              </label>
              <input
                id="noShares"
                type="number"
                placeholder="Number of Shares"
                name="numberOfShares"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="DEDCORATE">
              {" "}
              <label htmlFor="buyPrice">
                <h5>Buy Price:</h5>
              </label>
              <input
                type="number"
                id="buyPrice"
                placeholder="Buying Price"
                name="buyPrice"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="DEDCORATE">
              {" "}
              <label htmlFor="buydate">
                <h5>Buy Date:</h5>
              </label>
              <input
                type="Date"
                id="buyDate"
                name="buydate"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="buttons">
              <button type="submit" className="AddButton">
                Add
              </button>
              <button
                type="button"
                className="CLOSEBUTTON"
                onClick={this.closeModal}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
