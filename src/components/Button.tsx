import React from 'react'

interface ButtonProps extends HTMLButtonElement {
  isGameWon: boolean
}

export default function Button(props: ButtonProps) {
  return (
    <button></button>
  );
}