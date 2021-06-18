import React, { useContext, useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { AnswerContext } from "./AnswerProvider"
import { QuestionContext } from "./QuestionProvider"
import { Modal, Button } from "react-bootstrap";

export const ScoreSheet = () => {
    const history = useHistory()
    const { createAnswer, editAnswer, getAnswers } = useContext(AnswerContext)
    const { questions, getQuestions } = useContext(QuestionContext)
    const [currentAnswerList, setCurrentAnswerList] = useState([])
    const [questionExplanation, setQuestionExplanation] = useState("")

    // Handle Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getQuestions()
            .then(() => getAnswers())
            .then((answers) => {
                let newAnswerList = []
                answers.forEach(answer => {
                    let newAnswer = {
                        id: answer.id,
                        input_answer: answer.input_answer,
                        option_id: answer.option?.id,
                        question_id: answer.question.id
                    }
                    newAnswerList.push(newAnswer)
                })
                setCurrentAnswerList(newAnswerList)
            })
    }, [])

    const handleInputChange = e => {
        // console.log('currentAnswerList: ', currentAnswerList);
        let newAnswer = {
            input_answer: e.target.value,
            option_id: null,
            question_id: e.target.id
        }
        let newAnswerList = [...currentAnswerList]
        let arrayChanged = false
        newAnswerList.forEach(answer => {
            if (answer.question_id && parseInt(answer.question_id) === parseInt(newAnswer.question_id)) {
                if (answer.id) {
                    newAnswer.id = answer.id
                }
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
        // console.log('currentAnswerList: ', currentAnswerList);
        let newAnswer = {
            input_answer: null,
            option_id: parseInt(e.target.value),
            question_id: parseInt(e.target.id)
        }
        let newAnswerList = [...currentAnswerList]
        let arrayChanged = false
        newAnswerList.forEach(answer => {
            if (answer.question_id && parseInt(answer.question_id) === parseInt(newAnswer.question_id)) {
                if (answer.id) {
                    newAnswer.id = answer.id
                }
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
                <form>
                    <h2>Answer Form</h2>
                    <fieldset>
                        {
                            questions.map(question => {
                                let currentAnswer = () => currentAnswerList.find(answer => answer.question_id === question.id)
                                if (question.type === 'select') {
                                    return <div className="form-group" key={question.id}>
                                        <label >{question.text}</label>
                                        {question.explanation ? <Button variant="primary" onClick={(e) => {
                                            e.preventDefault()
                                            handleShow()
                                            setQuestionExplanation(question.explanation)
                                        }}>Details</Button> : <></>
                                        }
                                        <select id={question.id} value={currentAnswer()?.option_id} required className="form-control"
                                            onChange={handleOptionChange}>
                                            <option key="0" value="0">Please choose an option... </option>
                                            {question.options_set?.map(option => {
                                                return <option key={option.id} value={option.id}>{option.text} </option>
                                            })}
                                        </select>
                                    </div>
                                } else if (question.type === 'radio') {
                                    return <div className="form-group" key={question.id}>
                                        <label >{question.text}</label>
                                        {question.explanation ? <Button variant="primary" onClick={(e) => {
                                            e.preventDefault()
                                            handleShow()
                                            setQuestionExplanation(question.explanation)
                                        }}>Details</Button> : <></>
                                        }
                                        {question.options_set?.map(option => {
                                            return <> <input name={"question" + question.id} type="radio" id={question.id} key={option.id}
                                                value={option.id} checked={parseInt(currentAnswer()?.option_id) === parseInt(option.id)} required className="form-control"
                                                onChange={handleOptionChange}
                                            />
                                                <label id={question.id} >{option.text}</label> </>
                                        })}
                                    </div>
                                } else if (question.type === 'input') {
                                    return <div className="form-group" key={question.id}>
                                        <label >{question.text}</label>
                                        {question.explanation ? <Button variant="primary" onClick={(e) => {
                                            e.preventDefault()
                                            handleShow()
                                            setQuestionExplanation(question.explanation)
                                        }}>Details</Button> : <></>
                                        }
                                        <input type="number" min="1" max="10,000,000" step="100.00" id={question.id}
                                            value={currentAnswer()?.input_answer} required className="form-control"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                }
                            })
                        }
                    </fieldset>
                    <button type="submit"
                        onClick={evt => {
                            // Prevent form from being submitted
                            evt.preventDefault()
                            if (currentAnswerList[0].id) {
                                // Send PUT request to API
                                editAnswer(currentAnswerList)
                                    .then(() => history.push("/"))
                            } else {
                                // Send POST request to API
                                createAnswer(currentAnswerList)
                                    .then(() => history.push("/answers"))
                            }
                        }
                        }
                        className="btn btn-primary">{currentAnswerList[0]?.id ? "Edit Answers" : "Submit Answers"}</button>
                </form >
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>{questionExplanation}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }