import { data } from '../../data/data';
import { useState, useEffect } from 'react';

const Home = ({ letsPlay }) => {
  const [newGame, setNewGame] = useState({})

  useEffect(() => {
    setNewGame(data)
  })

  return (
    <div className='home-page'>
      <h1>WordHive</h1>
      <button onClick={() => {
        letsPlay(data)
        console.log(newGame)
        }}>Let's Play!</button>
    </div>
  )
}

export default Home;