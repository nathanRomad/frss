import React, { useContext, useEffect, useState } from "react"
import { AnalyticsContext } from "./AnalyticsProvider"
import { MyResponsivePie } from "./ScorePie"

export const Summary = (props) => {
    const { getSummary } = useContext(AnalyticsContext)
    const [summary, setSummary] = useState({})
    const [data, setData] = useState([])

    useEffect(() => {
        getSummary()
            .then((res) => {
                setSummary(res)
            })
    }, [])

    useEffect(() => {
        setData(summary.data)
    }, [summary])
    

    return (
        <>
            <h1>Summary</h1>
            <h2>Budget & Protection</h2>
            <div>Monthly Income: {summary.budgetAndProtection?.monthlyIncome}</div>
            <div>Total Liabilities: {summary.budgetAndProtection?.totalLiabilities}</div>
            <div>Total Annual Income: {summary.budgetAndProtection?.totalAnnualIncome}</div>
            <div>Ratio of Living Expenses: {summary.budgetAndProtection?.ratioOfLivingExpenses}</div>
            <br></br>
            <h2>Security & Legal</h2>
            <div>Life Insurance: {summary.securityAndLegal?.lifeInsurance}</div>
            <div>Renters Insurance: {summary.securityAndLegal?.rentersInsurance}</div>
            <div>Disability Insurance: {summary.securityAndLegal?.disabilityInsurance}</div>
            <div>Vehicle Insurance: {summary.securityAndLegal?.vehicleInsurance}</div>
            <div>Healthcare Directive: {summary.securityAndLegal?.healthCareDirective}</div>
            <br></br>
            <h2>Retirement Contributions & Retirement Savings</h2>
            <div>Monthly Retirement Contributions: {summary.retirement?.monthlyRetirementContributions}</div>
            <div>Total Retirement Contributions: {summary.retirement?.retirementSavings}</div>
            <br></br>
            <h2>Score</h2>
            <div>FRS: {summary.score?.financialReadinessScore}/100</div>
            {summary.data?
            <div style={{width: 450, height: 450 }}> <MyResponsivePie data={data}/> </div> : <></>}
        </>
    )
}