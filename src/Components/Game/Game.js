import { useState, useEffect } from "react";

const Game = ({ data }) => {
  const [letters, setLetters] = useState([])
  const [centerLetter, setCenterLetter] = useState('')

  useEffect(() => {
    setLetters(data.letters.split(''))
    setCenterLetter(data.center)
  }, [])

  return (
    <>
      <h1>New Game</h1>
      {letters.length > 0 && <div className="letters">
        <p className="letter">{letters[0]}</p>
        <p className="letter">{letters[1]}</p>
        <p className="letter">{letters[2]}</p>
        <p className="letter">{letters[3]}</p>
        <p className="letter">{letters[4]}</p>
        <p className="letter">{letters[5]}</p>
        <p className="center">{centerLetter}</p>
      </div>}
    </>
  )
}

export default Game;