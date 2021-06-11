import React from "react"
import { Route } from "react-router-dom"
import { AnswerProvider } from "./scoresheet/AnswerProvider"
import { ScoreSheet } from "./scoresheet/ScoreSheet"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <AnswerProvider>
                <Route exact path="/scoresheet">
                    <ScoreSheet />
                </Route>
            </AnswerProvider>
        </main>
    </>
}