import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
const firebase = `https://stocks-a6c21.firebaseio.com/tickers/.json`;
const alphavantage = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TCS&apikey=XGVQUV2Z5VMGJYAU`;
function App() {
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
