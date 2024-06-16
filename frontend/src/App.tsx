import { MusicContent } from "./components/music/music-content";
import { MusicContainer } from "./components/music/music-container";
import { Sidebar } from "./components/sidebar/sidebar";
import { Details } from "./components/details/details";
import { useAppMusic } from "./context/appMusicContext";
import { useEffect, useState } from "react";
import { spotify } from "./services/Spotify";
import { Album, Track } from "./types/songs";

export default function App() {
  const { playbackSong } = useAppMusic();
  const [songs, setSongs] = useState<Track[]>([]);

  useEffect(() => {
    const handleGetMusics = async () => {
      const recommendations = await spotify.Recommendations();
      setSongs(recommendations.tracks);
      console.log(recommendations.tracks);
    }
    handleGetMusics();
  }, []);

  return (
    <div className="flex w-full h-screen overflow-hidden relative">
      <Sidebar />
      <MusicContainer>
        {songs && songs.map(song => (
          <MusicContent image={song.album.images[0].url} title={song.name} onClick={() => playbackSong(song)} />
        ))}
      </MusicContainer>
      <Details />
    </div>
  );
}
