import React from "react";

import LedsContainer from './LedsContainer'

import styles from './Display.module.css'

interface DisplayProps {
  inputNumber: number
  winningNumber: number
  isTipTextHidden: boolean
  isGameWon: boolean
  handleNewGame: () => void
}

export default function Display({ inputNumber, winningNumber, isTipTextHidden, isGameWon, handleNewGame }: DisplayProps) {
  return (
    <div className={styles.display}>
      {winningNumber > inputNumber ?
      <p className={styles.tipText} hidden={isTipTextHidden}>É maior</p> :
      winningNumber < inputNumber ? 
      <p className={styles.tipText} hidden={isTipTextHidden}>É menor</p> :
      <p className={styles.tipTextSuccess} hidden={isTipTextHidden}>Acertou Mizeravi!!!</p>
      }
      <LedsContainer number={inputNumber} isGameWon={isGameWon} />
      {isGameWon ? 
      <button className={`${styles.button} ${styles.newGameButtonVisible}`} onClick={handleNewGame}>Nova Partida</button> :
      <button className={`${styles.button} ${styles.newGameButton}`} onClick={handleNewGame}>Nova Partida</button>
      }
    </div>
  );
}