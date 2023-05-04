import Quiz from '../img/Quiz.svg'
import React from 'react'
import "./Welcome.css"

import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Welcome = () => {
  const quizState = useContext(QuizContext)
  console.log(quizState)
  return (
    <div id='Welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão para começar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="ImagemBase" />
    </div>
  )
}

export default Welcome