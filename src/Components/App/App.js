import './App.css';
import Home from '../Home/Home';
import { Routes, Route } from 'react-router-dom';
import Game from '../Game/Game';
import { data } from '../../data/data';
import { useState, useEffect } from 'react';

const App = () => {
  const [gameData, setGameData] = useState({})
  const [userWords, setUserWords] = useState([])
  const [score, setScore] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home letsPlay={setGameData}/>}/>
      <Route path='new-game' element={<Game data={gameData} userWords={userWords} updateUserWords={setUserWords} score={score} updateScore={setScore}/>}/>
    </Routes>
  );
}

export default App;
