import { data } from '../../data/data';
import { Link } from 'react-router-dom';

const Home = ({ letsPlay }) => {
  return (
    <div className='home-page'>
      <h1>WordHive</h1>
      <Link to='new-game'><button onClick={() => letsPlay(data)}>Let's Play!</button></Link>
    </div>
  )
}

export default Home;