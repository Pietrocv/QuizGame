/*
    Arquvio destinado a trabalhar com a lógica, aqui é onde podemos alterar os estados da aplicação.
*/

import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STAGES  = ["Start", "Playing", "End"]

const inicialSTATE = {
    gameStage: STAGES[0],
    questions
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = { name: 'Quiz'}
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}