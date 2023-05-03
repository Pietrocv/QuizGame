import Quiz from '../img/Quiz.svg'
import React from 'react'
import './Welcome.css'

const Welcome = () => {
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