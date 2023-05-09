import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  console.log(quizState)

  return (
    <div>
     <p>Pergunta 0 de 10</p>
     <h2>pergunta Atual</h2>
     <div id="opttions-container">
      <p>Opções</p>
     </div>
    </div>
  )
}

export default Questions