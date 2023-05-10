import React from 'react'
import './GameOver.css'
import Welldone from '../img/welldone.svg'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const GameOver = () => {
  return (
    <div id='gameover'>
        <h2>Fim de Jogo</h2>
        <p>Pontuação: x</p>
        <p>Voce Acertou: y de z Perguntas.</p>
        <img src={Welldone} alt="Fim do Quiz" />
        <button>Voltar</button>
    </div>
  )
}

export default GameOver