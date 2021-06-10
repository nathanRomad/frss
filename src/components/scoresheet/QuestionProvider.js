import React, { useState } from "react"

export const QuestionContext = React.createContext()

export const QuestionProvider = (props) => {
    const [questions, setQuestions] = useState([])
    const [questionTypes, setTypes] = useState([])

    const getQuestions = () => {
        return fetch("http://localhost:8000/questions", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`
            }
        })
            .then(response => response.json())
            .then(setQuestions)
    }

    const getQuestionTypes = () => {
        return fetch("http://localhost:8000/questiontypes", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`
            }
        })
            .then(response => response.json())
            .then(setTypes)
    }

    const getQuestionById = (id) => {
        return fetch(`http://localhost:8000/questions/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`
            }
        })
            .then(response => response.json())
    }

    const createQuestion = (question) => {
        return fetch("http://localhost:8000/questions", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(question)
        })
    }

    const editQuestion = (question) => {
        return fetch(`http://localhost:8000/questions/${question.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(question)
        })
    }

    return (
        <QuestionContext.Provider value={{ questions, questionTypes, getQuestions, getQuestionTypes, createQuestion, editQuestion, getQuestionById }} >
            { props.children}
        </QuestionContext.Provider>
    )
}