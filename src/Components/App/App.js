import './App.css';
import { data } from '../../data/data';
import { useState, useEffect } from 'react';

const App = () => {
  const [gameData, setGameData] = useState({})

  useEffect(() => {
    setGameData(data)
  }, [])

  return (
    <div className='home-page'>
      <h1>WordHive</h1>
      <button>Let's Play!</button>
    </div>
  );
}

export default App;
