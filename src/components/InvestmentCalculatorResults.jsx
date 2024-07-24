import React from "react";

function calculateInvestmentYears(calculator) {
    const years = []
    // Create our number formatter.
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    let investedCapital = calculator.investment
    let investmentValueAtYearEnd = calculator.investment;
    let annualInterest = 0;
    let totalInterest = 0
    let rate = calculator.expected_return / 100;

    for (let i= 1; i <= calculator.duration; i++) {
        investedCapital += calculator.annual_investment
        annualInterest = investmentValueAtYearEnd * rate;
        totalInterest += annualInterest;
        investmentValueAtYearEnd =  investedCapital + totalInterest;

        console.log("Year: " + i);
        console.log("Invested Capital: " + investedCapital);
        console.log("Annual Interest: " + annualInterest);
        console.log("Total Interest: " + totalInterest);
        console.log("Investment Value Year End: " + investmentValueAtYearEnd);

        years.push(
            <tr key={i}>
                <td>{i}</td>
                <td>{formatter.format(Math.ceil(investmentValueAtYearEnd))}</td>
                <td>{formatter.format(Math.ceil(annualInterest))}</td>
                <td>{formatter.format(Math.ceil(totalInterest))}</td>
                <td>{formatter.format(Math.ceil(investedCapital))}</td>
            </tr>
        );
    }

    return <tbody>{years}</tbody>
}

export default function InvestmentCalculatorResults({calculator}) {
    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            {calculateInvestmentYears(calculator)}
        </table>
    );
}