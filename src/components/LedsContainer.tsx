import React from "react";
import { useState } from "react"

import styles from "./LedsContainer.module.css"

import LedContainer from "./LedContainer"

interface LedsContainerProps {
  number: number
  isGameWon: boolean
}

export default function LedsContainer({ number, isGameWon }: LedsContainerProps) {
  const stringNumber: string = number.toString()
  const splittedNumber: string[] = stringNumber.split("")

  return (
    <div className={styles.ledsContainer}>
      {splittedNumber.map(number => {
        const convertedNumber: number = parseInt(number)
        return (
          <LedContainer number={convertedNumber} isGameWon={isGameWon} />
        )
      })}
    </div>
  )
}