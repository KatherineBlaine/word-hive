import './Score.css'
import { useEffect } from 'react'

const Score = ({ userWords, score, letters, updateScore}) => {

  useEffect(() => {
    updateScore(calculateScore())
  }, [userWords])

  const userWordList = userWords.join()

  const calculateScore = () => {
   return userWords.reduce((accumulator, currentWord) => {
    if (currentWord.length === 4) {
      accumulator += 1;
    } else if (currentWord.length > 4) {
      accumulator += currentWord.length
    }
    return accumulator;
    }, 0)
  }

  return (
    <>
      <h2>Score: {score}</h2>
      <h3>Your Words: {userWordList}</h3>

    </>
  )
}

export default Score;