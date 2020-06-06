import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Mystocks from "../../components/Mystocks/Mystocks";
import Horizontal_Bar from "../../components/Horizontal-bar/Horizontal_Bar";
import AddStocks from "../../components/AddStocks/AddStocks";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Mystocks />
      <Horizontal_Bar />
      <AddStocks />
    </div>
  );
}

export default Homepage;
