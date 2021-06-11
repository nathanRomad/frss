import React, { useState } from "react"

export const AnswerContext = React.createContext()

export const AnswerProvider = (props) => {
    const [answers, setAnswers] = useState([])
    const [answerTypes, setTypes] = useState([])

    const getAnswers = () => {
        return fetch("http://localhost:8000/answers", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`
            }
        })
            .then(response => response.json())
            .then(setAnswers)
    }

    const getAnswerTypes = () => {
        return fetch("http://localhost:8000/answertypes", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`
            }
        })
            .then(response => response.json())
            .then(setTypes)
    }

    const getAnswerById = (id) => {
        return fetch(`http://localhost:8000/answers/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`
            }
        })
            .then(response => response.json())
    }

    const createAnswer = (answer) => {
        return fetch("http://localhost:8000/answers", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(answer)
        })
    }

    const editAnswer = (answer) => {
        return fetch(`http://localhost:8000/answers/${answer.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(answer)
        })
    }

    return (
        <AnswerContext.Provider value={{ answers, answerTypes, getAnswers, getAnswerTypes, createAnswer, editAnswer, getAnswerById }} >
            { props.children}
        </AnswerContext.Provider>
    )
}