import React from 'react'
import { useState, useEffect } from 'react';
import { text } from 'stream/consumers';

import Display from './Display'

import styles from './MainApplication.module.css'

export function MainApplication() {
  const maxNumber: number = 999, minNumber: number = 0
  //let input: string = ''
  
  const [inputValue, setInputValue] = useState('')
  const [winningNumber, setWinningNumber] = useState(numberGenerator(minNumber, maxNumber))
  const [inputNumber, setInputNumber] = useState(0)
  const [isTipTextHidden, setIsTipTextHidden] = useState(true)
  const [isGameWon, setIsGameWon] = useState(false)

  console.log(winningNumber)

  function numberGenerator(minNumber: number, maxNumber: number)  {
    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
  }

  function winningGameTest() {
    if(inputNumber === winningNumber) {
      setIsGameWon(true)
    }
  }

  useEffect(() => {
    winningGameTest()
  }, [inputNumber])

  function handleNewGame() {
    setWinningNumber(numberGenerator(minNumber, maxNumber))
    setIsTipTextHidden(true)
    setIsGameWon(false)
    setInputNumber(0)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    setInputNumber(parseInt(inputValue))
    setIsTipTextHidden(false)
    setInputValue('')
  }

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1 className={styles.headerH1}>Qual é o Número?</h1>
        <hr className={styles.headerHr} />
      </header>
      <Display 
        inputNumber={inputNumber}
        winningNumber={winningNumber}
        isTipTextHidden={isTipTextHidden}
        isGameWon={isGameWon}
        handleNewGame={handleNewGame}
      />

      <form onSubmit={handleSubmit}>
        <input id={styles["guessInput"]}
          onChange={handleInputChange}
          placeholder='Digite o Palpite'
          maxLength={3}
          value={inputValue}
          autoComplete='off'
          disabled={isGameWon} />
        <button type='submit'
          className={styles.button}
          id={styles["sendGuessButton"]}
          disabled={isGameWon}>
          Enviar
        </button>
      </form>
    </section>
  );
}