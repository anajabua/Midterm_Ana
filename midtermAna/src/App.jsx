import React from 'react'
import CardBack from "./components/CardBack"
import CardForm from "./components/CardFrom"
import CardGradient from "./components/CardGradient"

export default function App(){
  return (
  <><div className="cards">
      <CardBack />
      <CardGradient />
    </div>
    <CardForm /></>
  )
}