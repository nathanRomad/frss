import React, { useContext, useEffect, useState } from "react"
import { AnalyticsContext } from "./AnalyticsProvider"
import { MyResponsiveBar } from "./BarChart"
import { MyResponsiveLine } from "./LineGraph"

export const Analytics = (props) => {
    const { getSummary, getAnalytics } = useContext(AnalyticsContext)
    const [summary, setSummary] = useState({})
    const [analytics, setAnalytics] = useState({})
    const [retirementData, setRetirementData] = useState([])
    const [lineData, setLineData] = useState([])
    
    useEffect(() => {
        getSummary()
        .then((res) => {
            setSummary(res)
        })
    }, [])
    
    useEffect(() => {
        getAnalytics()
        .then((res) => {
            setAnalytics(res)
        })
    }, [])
    
    useEffect(() => {
        setRetirementData(analytics.retirementData)
    }, [analytics])

    useEffect(() => {
        setLineData(analytics.lineData)
    }, [analytics])
    

    return (
        <>
            <h1>Analytics</h1>
            <h2>Retirement</h2>
            <div>Retirement Expectation: {analytics.retirementAnalysis?.retirementExpectation}</div>
            <div>Retirement Savings: {analytics.retirementAnalysis?.retirementSavings}</div>
            <div style={{width: 450, height: 450 }}> {retirementData?.length ? <MyResponsiveBar data={retirementData}/>: <></>}</div>
            <h2>Monthly Budget</h2>
            <div>Monthly Income: {analytics.incomeAnalysis?.monthlyIncome}</div>
            <div>Total Monthly Bills: {analytics.incomeAnalysis?.totalMonthlyBills}</div>
            <div style={{width: 750, height: 550 }}> {lineData?.length ? <MyResponsiveLine data={lineData}/>: <></>}</div>
            <br></br>
     </>
    )
}