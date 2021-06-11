import React, { useContext, useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { AnswerContext } from "./AnswerProvider"

import { Answers } from "./QuestionProvider.js"

export const ScoreSheet = () => {
    const history = useHistory()
    const { gameId } = useParams()

    const { createAnswer, editAnswer, getAnswers } = useContext(AnswerContext)
    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentAnswer, setAnswers] = useState({
        input_answer: 0,
        select_answer: 0,
        question_id: 0
    })

    // useEffect(() => {
    //     getAnswers()
    //         .then(res => {
    //             setAnswers({
    //                 input_answer: res.input_answer,
    //                 select_answer: res.select_answer,
    //                 question_id: res.question_id
    //             })
    //         })
    // }
    //         })
    // }, [])

    const handleInputChange = e => {
        // debugger
        const newAnswers = { ...currentAnswer }
        newAnswers[e.target.name] = e.target.value
        if (e.target.name.includes("Id")) newAnswers[e.target.name] = parseInt(e.target.value)
        setAnswers(newAnswers)
    }

    return (
        <>
            <form>
                <h2>Answer Form</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <select type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}>
                            <option key="0" value="0">Please choose your employment status... </option>
                            <option key="1" value="employed">Employed</option>
                            <option key="2" value="unemployed">Unemployed</option>
                            <option key="3" value="active_military">Active Military</option>
                            <option key="4" value="retired">Retired</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question2">Do you work in an office setting?: </label>
                        <input type="text" name="question2" required autoFocus className="form-control"
                            value={currentAnswer.question2}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required autoFocus className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
            </form >
        </>
    )
}