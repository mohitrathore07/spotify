import { useContext } from 'react';
import './App.css';
import Display from './componant/Display/displaycomponant/display';
import Player from './componant/playercomponant/player';
import Sidebar from './componant/sidebarcomponant/sidebar';
import { PlayerContext } from './context/playercontext';

function App() {
  const {audioRef, track} = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black  ">
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
}

export default App;
