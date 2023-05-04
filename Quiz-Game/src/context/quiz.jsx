/*
    Arquvio destinado a trabalhar com a lógica, aqui é onde podemos alterar os estados da aplicação.
*/

import { createContext } from "react";

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = { name: 'Quiz'}
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}