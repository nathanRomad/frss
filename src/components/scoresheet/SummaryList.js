import React, { useContext, useEffect, useState } from "react"
import { AnswerContext } from "./AnswerProvider"


export const Summary = (props) => {

    const { getSummary } = useContext(AnswerContext)
    const [summary, setSummary] = useState({})

    useEffect(() => {
        getSummary()
        .then((res) => {
            setSummary(res)
        })
    }, [])

    return (
        <>
            <h1>Summary</h1>
            <h2>Budget & Protection</h2>
            <div>Monthly Income: {summary.monthlyIncome}</div>
            <div>Total Liabilities: {summary.totalLiabilities}</div>
            <div>Total Annual Income: {summary.totalAnnualIncome}</div>
            <div>Ratio of Living Expenses: {summary.ratioOfLivingExpenses}</div><br></br>
            <h2>Security & Legal</h2>
            {/* <div>Life Insurance: {summary.}</div>
            <div>Renters Insurance: {summary.}</div>
            <div>Disability Insurance: {summary.}</div>
            <div>Vehicle Insurance: {summary.}</div>
            <div>Healthcare Directive: {summary.}</div> */}
            <br></br>
            <h2>Retirement Contributions & Retirement Savings</h2>
            {/* <div>Life Insurance: {summary.}</div>
            <div>Renters Insurance: {summary.}</div>
            <div>Disability Insurance: {summary.}</div>
            <div>Vehicle Insurance: {summary.}</div>
            <div>Healthcare Directive: {summary.}</div> */}
            <br></br>

            <h2>Score</h2>
            <div>FRS: {summary.financialReadinessScore}/100</div>

        </>
    )
}