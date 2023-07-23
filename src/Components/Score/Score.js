import './Score.css'
import { useEffect } from 'react'

const Score = ({ userWords, score, letters, updateScore, totalPossible, level, updateLevel}) => {

  useEffect(() => {
    updateScore(calculateScore())
  }, [userWords])

  useEffect(() => {
    findLevel()
  }, [score])

  const userWordList = userWords.map(word => <li>{word}</li>)

  const findLevel = () => {
    const scorePercentage = score / totalPossible;
    if (scorePercentage >= 0.70) {
      updateLevel('Queen Bee')
    } else if (scorePercentage >= 0.50) {
      updateLevel('Outstanding')
    } else if (scorePercentage >= 0.40) {
      updateLevel('Marvellous')
    } else if (scorePercentage >= 0.25) {
      updateLevel('Superb')
    } else if (scorePercentage >= 0.15) {
      updateLevel('Excellent')
    } else if (scorePercentage >= 0.08) {
      updateLevel('Skilled')
    } else if (scorePercentage >= 0.05) {
      updateLevel('Fine')
    } else if (scorePercentage >= 0.02) {
      updateLevel('Novice')
    } else {
      updateLevel('Newbie')
    }
  }

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
      <h2>Level: {level}</h2>
      <h2>Score: {score}</h2>
      {/* <div>
        <h3>Your Words:</h3>
        <ol>{userWordList}</ol>
      </div> */}
    </div>
  )
}

export default Score;