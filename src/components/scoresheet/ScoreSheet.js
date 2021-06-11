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
    const [currentAnswer, setAnswers] = useState([
        
    ])

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

    const handleCheckboxChange = e => {
        // debugger
        const newAnswers = { ...currentAnswer }
        let selectedValue = e.target.checked
        newAnswers[e.target.id] = selectedValue
        setAnswers(newAnswers)
    }

    return (
        <>
            <form>
                <h2>Answer Form</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?</label>
                        <select id="question1" type="text" name="question1" required autoFocus className="form-control"
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
                        <label htmlFor="question2">Do you work in an office setting?</label>
                        <input type="radio" name="question2" required className="form-control"
                            value={currentAnswer.question2}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="question2">Yes</label>
                        <input type="radio" name="question2" required className="form-control"
                            value={currentAnswer.question2}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="question2">No</label>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question3">How secure is your job?</label>
                        <select type="text" name="question3" required className="form-control"
                            value={currentAnswer.question3}
                            onChange={handleInputChange}>
                            <option key="0" value="0">Please choose your level of job security... </option>
                            <option key="1" value="employed">Secure</option>
                            <option key="2" value="unemployed">Somewhat Secure</option>
                            <option key="3" value="active_military">Not Secure</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question4">What is your individual annual income?</label>
                        <input type="number" min="1" max="10,000,000" step="100.00" name="question4" required className="form-control"
                            value={currentAnswer.question4}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question5">How much annual income is provided by other sources?</label>
                        <input type="number" min="100" max="10,000,000" step="100.00" name="question5" required className="form-control"
                            value={currentAnswer.question5}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question6">Do you own a house (or condo)?</label>
                        <input type="radio" name="question6" required className="form-control"
                            value={currentAnswer.question2}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="question2">Yes</label>
                        <input type="radio" name="question6" required className="form-control"
                            value={currentAnswer.question6}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="question2">No</label>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question7">Not including your home, retirement accounts and emergency fund, what is the estimated total value of your additional assets?</label>
                        <input type="number" min="1" max="10,000,000" step="100.00" name="question7" required className="form-control"
                            value={currentAnswer.question7}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question8">If you combined all your debts, approximately how much would you owe?</label>
                        <input type="number" name="question8" required className="form-control"
                            value={currentAnswer.question8}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question9">On average, how much do you pay towards those debts every month?</label>
                        <input type="number" name="question9" required className="form-control"
                            value={currentAnswer.question9}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question10">On average, how much do you spend monthly on living expenses?</label>
                        <input type="number" name="question10" required className="form-control"
                            value={currentAnswer.question10}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question11">Do you follow a plan to manage your monthly expenses?</label>
                        <input type="radio" name="question11" required className="form-control"
                            value={currentAnswer.question11}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="question2">Yes</label>
                        <input type="radio" name="question12" required className="form-control"
                            value={currentAnswer.question12}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="question2">No</label>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question12">Do you have renters insurance?</label>
                        <input type="radio" name="question12" required className="form-control"
                            value={currentAnswer.question12}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="question2">Yes</label>
                        <input type="radio" name="question12" required className="form-control"
                            value={currentAnswer.question12}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="question2">No</label>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question13">How many vehicles do you own or lease?</label>
                        <select type="text" name="question13" required className="form-control"
                            value={currentAnswer.question13}
                            onChange={handleInputChange}>
                            <option key="0" value="0">Please choose from the following options... </option>
                            <option key="1" value="one">1</option>
                            <option key="2" value="two">2</option>
                            <option key="3" value="three_or_more">3+</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="question1">What is your employment status?: </label>
                        <input type="text" name="question1" required className="form-control"
                            value={currentAnswer.question1}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
            </form >
        </>
    )
}