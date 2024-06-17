import { MusicContent } from "./components/music/music-content";
import { Sidebar } from "./components/sidebar/sidebar";
import { Details } from "./components/details/details";
import { useAppMusic } from "./context/appMusicContext";
import { useEffect, useState } from "react";
import { spotify } from "./services/Spotify";
import { Track } from "./types/songs";
import { Search } from "./search/search";
import { Slide } from "./components/slide/slide";

export default function App() {
  const { playbackSong, hasMusic } = useAppMusic();
  const [recomendation, setRecomendation] = useState<Track[]>([]);

  useEffect(() => {
    const handleGetMusics = async () => {
      const recomendation = await spotify.Recommendations();
      setRecomendation(recomendation.tracks);
      console.log(recomendation.tracks);
    }
    handleGetMusics();
  }, []);

  return (
    <div className="w-full h-screen relative">
      <Sidebar />
      <div className={`ml-14 p-7 flex flex-col gap-4 ${hasMusic ? 'w-9/12' : ''}`}>
        <Search />
        <Slide>
          {recomendation && recomendation.map(song => (
            <MusicContent image={song.album.images[0].url} title={song.name} onClick={() => playbackSong(song)} />
          ))}
        </Slide>
      </div>
      <Details />
    </div>
  );
}
