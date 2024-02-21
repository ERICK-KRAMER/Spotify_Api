// App.tsx
import { useState } from 'react';
import SideBar from './components/sideBar';
import Song from './components/Song';
import { AppContext } from './context/request.music';
import HomePage from './pages/homePage';

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
  const [songs, setSongs] = useState<Song[]>([]);

  return (
    <AppContext.Provider value={{ songs, setSongs }}>
      <SideBar />
      <HomePage />
      <Song />
    </AppContext.Provider>
  );
}
