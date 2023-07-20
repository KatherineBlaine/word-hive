import './App.css';
import Home from '../Home/Home';
import { Routes, Route } from 'react-router-dom';
import Game from '../Game/Game';
import { data } from '../../data/data';
import { useState, useEffect } from 'react';

const App = () => {
  const [gameData, setGameData] = useState({})

  return (
    <Routes>
      <Route path='/' element={<Home letsPlay={setGameData}/>}/>
      <Route path='new-game' element={<Game />}/>
    </Routes>
  );
}

export default App;
