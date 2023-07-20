import './App.css';
import Home from '../Home/Home';
import { data } from '../../data/data';
import { useState, useEffect } from 'react';

const App = () => {
  const [gameData, setGameData] = useState({})

  return (
    <Home letsPlay={setGameData}/>
  );
}

export default App;
