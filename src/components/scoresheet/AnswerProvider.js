import React, { useState } from "react"

export const AnswerContext = React.createContext()

export const AnswerProvider = (props) => {
    const [answers, setAnswers] = useState([])
    const [answerTypes, setTypes] = useState([])

    const getAnswers = () => {
        return fetch("https://financialreadinessscoresheet.herokuapp.com/answers", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`
            }
        })
            .then(response => response.json())
    }
    
    const getSummary = () => {
        return fetch("https://financialreadinessscoresheet.herokuapp.com/summary", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`
            }
        })
            .then(response => response.json())
    }

    const getAnswerTypes = () => {
        return fetch("https://financialreadinessscoresheet.herokuapp.com/answertypes", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`
            }
        })
            .then(response => response.json())
            .then(setTypes)
    }

    const getAnswerById = (id) => {
        return fetch(`https://financialreadinessscoresheet.herokuapp.com/answers/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`
            }
        })
            .then(response => response.json())
    }

    const createAnswer = (answer) => {
        return fetch("https://financialreadinessscoresheet.herokuapp.com/answers", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(answer)
        })
    }

    const editAnswer = (answer) => {
        return fetch(`https://financialreadinessscoresheet.herokuapp.com/answers/${answer.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(answer)
        })
    }

    return (
        <AnswerContext.Provider value={{ answers, answerTypes, getAnswers, getAnswerTypes, createAnswer, editAnswer, getAnswerById, getSummary }} >
            { props.children}
        </AnswerContext.Provider>
    )
}