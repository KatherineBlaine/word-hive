import './Score.css'
import { useEffect } from 'react'

const Score = ({ userWords, score, letters, updateScore}) => {

  useEffect(() => {
    updateScore(calculateScore())
  }, [userWords])

  const userWordList = userWords.map(word => <li>{word}</li>)

  const calculateScore = () => {
   return userWords.reduce((accumulator, currentWord) => {
    if (letters.every(letter => currentWord.includes(letter))) {
      const pangramScore = currentWord.length + 7
      accumulator += pangramScore;
    } else if (currentWord.length === 4) {
      accumulator += 1;
    } else if (currentWord.length > 4) {
      accumulator += currentWord.length
    }
    return accumulator;
    }, 0)
  }

  return (
    <div className='score-board'>
      <h2>Score: {score}</h2>
      <h3>Your Words:</h3>
      <ol>{userWordList}</ol>
    </div>
  )
}

export default Score;