import React, { useState } from "react"

export const QuestionContext = React.createContext()

export const QuestionProvider = (props) => {
    const [questions, setQuestions] = useState([])
    const [questionTypes, setTypes] = useState([])

    const getQuestions = () => {
        return fetch("https://financialreadinessscoresheet.herokuapp.com/questions", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`
            }
        })
            .then(response => response.json())
            .then(setQuestions)
    }

    const getQuestionTypes = () => {
        return fetch("https://financialreadinessscoresheet.herokuapp.com/questiontypes", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`
            }
        })
            .then(response => response.json())
            .then(setTypes)
    }

    const getQuestionById = (id) => {
        return fetch(`https://financialreadinessscoresheet.herokuapp.com/questions/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`
            }
        })
            .then(response => response.json())
    }

    const createQuestion = (question) => {
        return fetch("https://financialreadinessscoresheet.herokuapp.com/questions", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("frss_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(question)
        })
    }

    const editQuestion = (question) => {
        return fetch(`https://financialreadinessscoresheet.herokuapp.com/questions/${question.id}`, {
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