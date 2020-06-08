import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Mystocks from "../../components/Mystocks/Mystocks";
import Horizontal_Bar from "../../components/Horizontal-bar/Horizontal_Bar";
import AddStocks from "../../components/AddStocks/AddStocks";
import Modal from "../../components/Modal/Modal";

export default class Homepage extends Component {
  state = {
    currentPrice: null,
    stockName: "",
    numberOfShares: null,
    BuyPrice: null,
    showButton: true,
    stocksymbol: "",
    isSelected: false,
    buttonId: "",
    showModal: false,
  };

  getCurrentPrice = (
    currentprice,
    modalcontrol,
    btnName,
    Buttonvalue,
    btnId
  ) => {
    this.setState({
      currentPrice: currentprice,
      showModal: modalcontrol,
      stockName: btnName,
      isSelected: false,
      stocksymbol: Buttonvalue,
      buttonId: btnId,
    });
  };
  closeModal = (modalFlag) => {
    this.setState({
      showModal: modalFlag,
      isSelected: true,
    });
  };

  addStock = (modalFlag, shares, buyPrice) => {
    this.setState({
      showModal: modalFlag,
      numberOfShares: shares,
      BuyPrice: buyPrice,
      showButton: false,
      isSelected: true,
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Mystocks isSelected={this.state.isSelected} />
        <Horizontal_Bar />
        <AddStocks currentPrice={this.getCurrentPrice} />
        {this.state.showModal && (
          <Modal
            stockName={this.state.stockName}
            stockSymbol={this.state.stocksymbol}
            currentPrice={this.state.currentPrice}
            buttonId={this.state.buttonId}
            addStock={this.addStock}
            closeModal={this.closeModal}
          ></Modal>
        )}
      </div>
    );
  }
}
