// request.music.tsx
import { createContext, Dispatch, SetStateAction } from 'react';

interface Song {
  id: string;
  name: string;
  album: {
    images: {
      url: string;
    }[];
  };
}

export interface MusicContextType {
  songs: Song[];
  setSongs: Dispatch<SetStateAction<Song[]>>;
}

export const AppContext = createContext<MusicContextType>({
  songs: [],
  setSongs: () => {},
});
