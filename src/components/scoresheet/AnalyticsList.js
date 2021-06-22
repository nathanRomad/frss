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

    // useEffect(() => {
    //     setData(summary.data)
    // }, [summary])
    

    return (
        <>
            <h1>Analytics</h1>
            {/* <h2>Analysis One</h2>
            <div>something: {analytics.something?.analysis}</div>
            <br></br>
            <h2>Analysis Two</h2>
            <div>something else: {analytics.somethingElse?.analysis}</div>
            <br></br> */}
        </>
    )
}