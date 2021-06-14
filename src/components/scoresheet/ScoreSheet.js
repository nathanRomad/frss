import React, { useContext, useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { AnswerContext } from "./AnswerProvider"
import { QuestionContext } from "./QuestionProvider"
// import { Answers } from "./QuestionProvider.js"

export const ScoreSheet = () => {
    const history = useHistory()
    const { gameId } = useParams()

    const { createAnswer, editAnswer, getAnswers } = useContext(AnswerContext)
    const { questions, getQuestions } = useContext(QuestionContext)
    const [currentAnswerList, setCurrentAnswerList] = useState([])

    useEffect(() => {
        getQuestions()
    }, [])

    const handleInputChange = e => {
        console.log(currentAnswerList)
        let newAnswer = {
            input_answer: e.target.value,
            option_id: null,
            question_id: e.target.id
        }
        let newAnswerList = currentAnswerList
        let arrayChanged = false
        newAnswerList.forEach(answer => {
            if (answer.question_id && answer.question_id === newAnswer.question_id) {
                arrayChanged = true
                let answerIndex = newAnswerList.indexOf(answer)
                newAnswerList.splice(answerIndex, 1, newAnswer)
                setCurrentAnswerList(newAnswerList)
            }
        });
        if (arrayChanged === false) {
            newAnswerList.push(newAnswer)
            setCurrentAnswerList(newAnswerList)
        }
    }

    const handleOptionChange = e => {
        console.log(currentAnswerList)
        let newAnswer = {
            input_answer: null,
            option_id: e.target.value,
            question_id: e.target.id
        }
        let newAnswerList = currentAnswerList
        let arrayChanged = false
        newAnswerList.forEach(answer => {
            if (answer.question_id && answer.question_id === newAnswer.question_id) {
                arrayChanged = true
                let answerIndex = newAnswerList.indexOf(answer)
                newAnswerList.splice(answerIndex, 1, newAnswer)
                setCurrentAnswerList(newAnswerList)
            }
        });
        if (arrayChanged === false) {
            newAnswerList.push(newAnswer)
            setCurrentAnswerList(newAnswerList)
        }
    }

    return (
        <>
        {/* {console.log(currentAnswerList)} */}
            <form>
                <h2>Answer Form</h2>
                <fieldset>
                    {
                        questions.map(question => {
                            if (question.type === 'select') {
                                return <div className="form-group">
                                    <label >{question.text}</label>
                                    <select id={question.id} required autoFocus className="form-control"
                                        onChange={handleOptionChange}>
                                        <option key="0" value="0">Please choose an option... </option>
                                        {question.options_set?.map(option => {
                                            return <option key={option.id} value={option.id}>{option.text} </option>
                                        })}
                                    </select>
                                </div>
                            } else if (question.type === 'radio') {
                                return <div className="form-group">
                                    <label >{question.text}</label>
                                    {question.options_set?.map(option => {
                                        return <> <input name={"question" + question.id} type="radio" id={question.id} value={option.id} required className="form-control"
                                            onChange={handleOptionChange}
                                        />
                                            <label id={question.id} >{option.text}</label> </>
                                    })}
                                </div>
                            } else if (question.type === 'input') {
                                return <div className="form-group">
                                    <label >{question.text}</label>
                                    <input type="number" min="1" max="10,000,000" step="100.00" id={question.id} required className="form-control"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            }
                            return <label> {question.text} </label>
                        })
                    }
                </fieldset>
            </form >
        </>
    )
}