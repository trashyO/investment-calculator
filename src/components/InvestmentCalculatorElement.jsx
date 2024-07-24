import React from "react";
import {Component} from "react";

export default function InvestmentCalculatorElement({element, label, calculatorValue, onChangeCalculatorValue}) {
    return (
        <>
            <label htmlFor={element} className="center">{label}</label>
            <input id={element} type="number" defaultValue={calculatorValue} size="5" onChange={e => onChangeCalculatorValue(element, e.target.value)}/>
        </>
    );
}