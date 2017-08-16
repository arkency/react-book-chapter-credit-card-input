import React from "react";
import ReactDOM from "react-dom";
import CreditCardInput from "./components/CreditCardInput";

let types = {
  Visa: /^4/,
  MasterCard: /^5[1-5]/,
  "American Express": /^3[47]/
};

ReactDOM.render(
  <CreditCardInput types={types} />,
  document.getElementById("root")
);
