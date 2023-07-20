import { data } from '../../data/data';

const Home = ({ letsPlay }) => {
  return (
    <div className='home-page'>
      <h1>WordHive</h1>
      <button onClick={() => letsPlay(data)}>Let's Play!</button>
    </div>
  )
}

export default Home;