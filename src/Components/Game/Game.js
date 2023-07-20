import { useState, useEffect } from "react";
import './Game.css'

const Game = ({ data }) => {
  const [letters, setLetters] = useState([])
  const [centerLetter, setCenterLetter] = useState('')

  useEffect(() => {
    setLetters(data.letters.toUpperCase().split(''))
    setCenterLetter(data.center.toUpperCase())
  }, [])

  return (
    <>
    <div className="game-board">
      {letters.length > 0 && <div className="all-letters">
        <p id="letter1" className="letter">{letters[0]}</p>
        <p id="letter2" className="letter">{letters[1]}</p>
        <p id="letter3" className="letter">{letters[2]}</p>
        <p id="letter4" className="letter">{letters[3]}</p>
        <p id="letter5" className="letter">{letters[4]}</p>
        <p id="letter6" className="letter">{letters[5]}</p>
        <p id="center" className="letter">{centerLetter}</p>
      </div>}
    </div>
    </>
  )
}

export default Game;