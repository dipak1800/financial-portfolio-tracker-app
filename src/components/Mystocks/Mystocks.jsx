import React from "react";
import "./Mystocks.scss";
const mystocksdata = [
  {
    symbol: "A",
    name: "A",
    no: "10",
    buy: "100",
    current: "1000",
    profit: "11",
    Action: "actiom",
  },
  {
    symbol: "B",
    name: "A",
    no: "10",
    buy: "100",
    current: "1000",
    profit: "11",
    Action: "actiom",
  },
  {
    symbol: "C",
    name: "A",
    no: "10",
    buy: "100",
    current: "1000",
    profit: "11",
    Action: "actiom",
  },
];
function mystocks() {
  return (
    <>
      <header className="main ">
        <div className="MyStocks">
          <h4 className="mb-2 Title">My Stocks</h4>
          <table className="MyStocksTable">
            <tr>
              <th>Stock symbol</th>
              <th>Stock name</th>
              <th>No.of shares</th>
              <th>Buy price</th>
              <th>Current price</th>
              <th>Profit/Loss</th>
              <th> </th>
            </tr>
            {mystocksdata.map((stock) => (
              <tr>
                <td>{stock.symbol}</td>
                <td>{stock.name}</td>
                <td>{stock.no}</td>
                <td>{stock.buy}</td>
                <td>{stock.current}</td>
                <td>{stock.profit}</td>
                <td>{stock.Action}</td>
              </tr>
            ))}
          </table>
        </div>
      </header>
    </>
  );
}

export default mystocks;
