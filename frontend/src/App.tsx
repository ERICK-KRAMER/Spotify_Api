import { MusicContent } from "./components/music/music-content";
import { MusicContainer } from "./components/music/music-container";
import { Sidebar } from "./components/sidebar/sidebar";
import { Details } from "./components/details/details";
import { useState } from "react";
import { useAppMusic } from "./context/appMusicContext";

export default function App() {
  const [hasMusic, setHasMusic] = useState<boolean>(false);
  const { playbackSong } = useAppMusic();

  return (
    <div className="flex w-full h-screen overflow-hidden relative">
      <Sidebar />
      <MusicContainer>
        {Array.from({ length: 8 }, (_, index) => (
          <MusicContent key={index} />
        ))}
        <button onClick={playbackSong}>Toggle Music</button>
      </MusicContainer>
      <Details hasMusic={hasMusic} />
    </div>
  );
}
