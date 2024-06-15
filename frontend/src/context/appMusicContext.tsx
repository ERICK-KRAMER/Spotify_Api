import { createContext, useContext, useState, ReactNode } from "react";

interface Songs {
  id: string;
  title: string;
  artist: string;
  album: string;
}

interface MethodsProps {
  playbackSong: () => void;
  currentSong: Songs | null;
  setCurrentSong: (song: Songs) => void;
}

const AppMusicContext = createContext<MethodsProps>({} as MethodsProps);

const useAppMusic = () => {
  const context = useContext(AppMusicContext);
  if (!context) {
    throw new Error("useAppMusic must be used within AppMusicProvider");
  }
  return context;
}

const AppMusicContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentSong, setCurrentSong] = useState<Songs | null>(null);

  const playbackSong = () => {
    console.log('Song is playing:', currentSong);
  }

  const methods: MethodsProps = {
    playbackSong,
    currentSong,
    setCurrentSong
  }

  return (
    <AppMusicContext.Provider value={methods}>
      {children}
    </AppMusicContext.Provider>
  );
}

export { AppMusicContextProvider, useAppMusic };
