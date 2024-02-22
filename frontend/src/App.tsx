import { useState } from 'react';
import SideBar from './components/sideBar';
import Song from './components/Song';
import HomePage from './pages/homePage';
import PlayMusic from './context/playMusic';

interface Song {
  id: string;
  name: string;
  album: {
    images: {
      url: string;
    }[];
  };
}

export default function App() {
  const [track, setTrack] = useState<Song[]>([])

  return (
    <PlayMusic.Provider value={{ track, setTrack }}>
      <SideBar />
      <HomePage />
      <Song />
    </PlayMusic.Provider>
  );
}
