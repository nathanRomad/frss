import React, { useContext, useEffect, useState } from "react"
import { AnalyticsContext } from "./AnalyticsProvider"
import { MyResponsivePie } from "./ScorePie"

export const Analytics = (props) => {
    const { getSummary, getAnalytics } = useContext(AnalyticsContext)
    const [summary, setSummary] = useState({})
    const [analytics, setAnalytics] = useState({})
    const [data, setData] = useState([])

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
    

    return (
        <>
            <h1>Analytics</h1>
            <h2>Analysis One</h2>
            <div>Total Liabilities: {analytics.detailedAnalysisOne?.totalLiabilities}</div>
            <div>Retirement Savings: {analytics.detailedAnalysisOne?.retirementSavings}</div>
            <br></br>
        </>
    )
}