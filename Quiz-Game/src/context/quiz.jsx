/*
    Arquvio destinado a trabalhar com a lógica, aqui é onde podemos alterar os estados da aplicação.
*/

import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STAGES  = ["Start", "Playing", "End"]

const inicialState = {
    gameStage: STAGES[0],
    questions
}

const quizReducer = (state, action) => {
    console.log(state, action)
    switch(action.type){
        case "CHANGE_STATE": 
            return {
                gameStage: STAGES[1]
            }
        default:
            return state
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, inicialState)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}