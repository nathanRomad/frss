import React, { useState } from "react"

export const AnalyticsContext = React.createContext()

export const AnalyticsProvider = (props) => {

    const getSummary = () => {
        return fetch("http://localhost:8000/summary", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`
            }
        })
            .then(response => response.json())
    }

    const getAnalytics = () => {
        return fetch("http://localhost:8000/analytics", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`
            }
        })
            .then(response => response.json())
    }


    return (
        <AnalyticsContext.Provider value={{ getSummary, getAnalytics }} >
            { props.children}
        </AnalyticsContext.Provider>
    )
}