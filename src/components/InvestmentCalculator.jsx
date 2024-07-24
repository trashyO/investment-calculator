import React from "react";
import {Component} from "react";
import InvestmentCalculatorElement from "./InvestmentCalculatorElement.jsx";

export default function InvestmentCalculator({calculator, onChangeCalculatorValue}) {
    return (
        <div id="user-input">
            <span className="input-group">
              <InvestmentCalculatorElement element="investment" label="Initial Investement" calculatorValue={calculator.investment} onChangeCalculatorValue={onChangeCalculatorValue} />
              <InvestmentCalculatorElement element="annual_investment" label="Annual Investement" calculatorValue={calculator.annual_investment} onChangeCalculatorValue={onChangeCalculatorValue} />
            </span><br />
                <span className="input-group">
              <InvestmentCalculatorElement element="expected_return" label="Expected Return" calculatorValue={calculator.expected_return} onChangeCalculatorValue={onChangeCalculatorValue} />
              <InvestmentCalculatorElement element="duration" label="Duration" calculatorValue={calculator.duration} onChangeCalculatorValue={onChangeCalculatorValue} />
            </span>
        </div>
    );
}