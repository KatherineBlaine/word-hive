import { useState, useEffect } from "react";
import './Game.css'

const Game = ({ data }) => {
  const [letters, setLetters] = useState([])
  const [centerLetter, setCenterLetter] = useState('')
  const [word, setWord] = useState([])

  useEffect(() => {
    setLetters(data.letters.toUpperCase().split(''))
    setCenterLetter(data.center.toUpperCase())
  }, [])

  return (
    <>
    <div className="game-board">
      {letters.length > 0 && <div className="all-letters">
        <p id="letter1" className="letter" onClick={() => setWord([...word, letters[0]])}>{letters[0]}</p>
        <p id="letter2" className="letter" onClick={() => setWord([...word, letters[1]])}>{letters[1]}</p>
        <p id="letter3" className="letter" onClick={() => setWord([...word, letters[2]])}>{letters[2]}</p>
        <p id="letter4" className="letter" onClick={() => setWord([...word, letters[3]])}>{letters[3]}</p>
        <p id="letter5" className="letter" onClick={() => setWord([...word, letters[4]])}>{letters[4]}</p>
        <p id="letter6" className="letter" onClick={() => setWord([...word, letters[5]])}>{letters[5]}</p>
        <p id="center" className="letter" onClick={() => setWord([...word, centerLetter])}>{centerLetter}</p>
      </div>}
      <input value={word.join('')} onChange={(event) => setWord(event.target.value)}></input>
    </div>
    </>
  )
}

export default Game;