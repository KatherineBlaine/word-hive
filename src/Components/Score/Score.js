import './Score.css'

const Score = ({ userWords, score, updateScore}) => {
  const userWordList = userWords.join( )

  return (
    <>
      <h2>Score</h2>
      <h3>Your Words: {userWordList}</h3>

    </>
  )
}

export default Score;