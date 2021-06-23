import React, { useContext, useEffect, useState } from "react"
import { AnalyticsContext } from "./AnalyticsProvider"
import { MyResponsiveBar } from "./BarChart"

export const Analytics = (props) => {
    const { getSummary, getAnalytics } = useContext(AnalyticsContext)
    const [summary, setSummary] = useState({})
    const [analytics, setAnalytics] = useState({})
    const [retirementData, setRetirementData] = useState([])
    
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
    

    return (
        <>
            <h1>Analytics</h1>
            <h2>Retirement</h2>
            <div>Total Liabilities: {analytics.detailedAnalysisOne?.totalLiabilities}</div>
            <div>Retirement Savings: {analytics.detailedAnalysisOne?.retirementSavings}</div>
            <div style={{width: 450, height: 450 }}> {retirementData?.length ? <MyResponsiveBar data={retirementData}/>: <></>}</div>
            <br></br>
     </>
    )
}