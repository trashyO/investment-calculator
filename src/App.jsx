import Header from "./components/Header.jsx";
import React from "react";
import { useState } from 'react';
import InvestmentCalculatorResults from "./components/InvestmentCalculatorResults.jsx";
import InvestmentCalculator from "./components/InvestmentCalculator.jsx";

const CALCULATOR = {
  investment: 10000,
  annual_investment: 300,
  expected_return: 5.5,
  duration: 2
}

function App() {
  const [calculator, setCalculator] = useState(CALCULATOR);

  function handleInvestmentCalculatorChange(element, newCalculatorValue) {
    setCalculator(prevCalculator => {
      return {
        ...prevCalculator,
        [element]: parseInt(newCalculatorValue)
      }
    })
  }

  return (
    <>
      <Header />
      <InvestmentCalculator calculator={calculator} onChangeCalculatorValue={handleInvestmentCalculatorChange} />
      <InvestmentCalculatorResults calculator={calculator} />
    </>
  )
}

export default App
