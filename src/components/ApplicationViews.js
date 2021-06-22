import React from "react"
import { Route } from "react-router-dom"
import { AnswerProvider } from "./scoresheet/AnswerProvider"
import { QuestionProvider } from "./scoresheet/QuestionProvider"
import { AnalyticsProvider } from "./scoresheet/AnalyticsProvider"
import { ScoreSheet } from "./scoresheet/ScoreSheet"
import { Summary } from "./scoresheet/SummaryList"
import { Analytics } from "./scoresheet/AnalyticsList"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <AnswerProvider>
                <QuestionProvider>
                    <AnalyticsProvider>
                        <Route exact path="/">
                            <Summary />
                        </Route>
                        <Route exact path="/scoresheet">
                            <ScoreSheet />
                        </Route>
                        <Route exact path="/analytics">
                            <Analytics />
                        </Route>
                    </AnalyticsProvider>
                </QuestionProvider>
            </AnswerProvider>
        </main>
    </>
}