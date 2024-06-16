import { createContext, useContext, useState } from "react";
import { Track } from "../types/songs";

interface MethodsProps {
  playbackSong: (song: Track) => void;
  currentSong: Track | null;
  setCurrentSong: (song: Track) => void;
  hasMusic: boolean;
}

const AppMusicContext = createContext<MethodsProps>({} as MethodsProps);

const useAppMusic = () => {
  const context = useContext(AppMusicContext);
  if (!context) {
    throw new Error("useAppMusic must be used within AppMusicProvider");
  }
  return context;
}

const AppMusicContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSong, setCurrentSong] = useState<Track | null>(null);
  const [hasMusic, setHasMusic] = useState<boolean>(false);

  const playbackSong = (song: Track) => {
    setCurrentSong(song);
    if (currentSong) {
      setHasMusic(true);
      console.log(hasMusic)
    } else {
      setHasMusic(false);
      console.log(hasMusic)
    }
    console.log('Song is playing:', currentSong);
  }

  const methods: MethodsProps = {
    playbackSong,
    currentSong,
    setCurrentSong,
    hasMusic
  }

  return (
    <AppMusicContext.Provider value={methods}>
      {children}
    </AppMusicContext.Provider>
  );
}

export { AppMusicContextProvider, useAppMusic };
