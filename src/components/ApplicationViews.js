import React from "react"
import { Route } from "react-router-dom"
import { AnswerProvider } from "./scoresheet/AnswerProvider"
import { QuestionProvider } from "./scoresheet/QuestionProvider"
import { ScoreSheet } from "./scoresheet/ScoreSheet"
import { Summary } from "./scoresheet/SummaryList"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <AnswerProvider>
                <QuestionProvider>
                    <Route exact path="/">
                        <Summary />
                    </Route>
                    <Route exact path="/scoresheet">
                        <ScoreSheet />
                    </Route>
                </QuestionProvider>
            </AnswerProvider>
        </main>
    </>
}