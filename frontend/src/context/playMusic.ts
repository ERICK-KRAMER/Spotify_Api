import { createContext } from "react";

interface Song {
    id: string;
    name: string;
    album: {
      images: {
        url: string;
      }[];
    };
  }

interface PlayMusicContextType {
    track: Song[];
    setTrack: React.Dispatch<React.SetStateAction<Song[]>>;
  }
  
  const PlayMusicContext = createContext<PlayMusicContextType | null>(null);

export default PlayMusicContext;