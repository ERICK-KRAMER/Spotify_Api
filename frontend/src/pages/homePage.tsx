import { useEffect, useState } from "react";
import Search from "../components/search";
import Style from "../styles/homePage.module.css";
import { usePlayMusicContext } from "../hooks/usePlayMusicContext";
import { searchMusic } from "../api/searchMusic";

interface Song {
  id: string;
  name: string;
  album: {
    images: {
      url: string;
    }[];
  };
}

const ITEMS_PER_PAGE = 6;

const HomePage = (): JSX.Element => {
  //
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [songs, setSongs] = useState<Song[]>([]);
  const { setTrack } = usePlayMusicContext();
  //
  useEffect(() => {
    if(name !== "") {
      searchMusic(name)
        .then(data => {
          setSongs(data.searchResult.tracks.items);
        })
        .catch(error => console.error("Erro ao buscar músicas:", error));
    }
  }, [name]);
  //
  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };
  //
  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };
  //
  const renderSongs = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentSongs = songs.slice(startIndex, endIndex);

    return (
      <div className={Style.songs}>
        {currentSongs.map(song => (
          <div className={Style.track} key={song.id} onClick={ ()=>{ setTrack(song) }}>
            <img src={song.album.images[1].url} alt={song.name}/>
            <h3>{song.name}</h3>
          </div>
        ))}
      </div>
    );
  };
  //
  return (
    <div className={Style.container}>
      <div className={Style.search}>
        <Search setName={setName} name={name} />
        <div className={Style.trending}>
          <h1>Trending</h1>
          {renderSongs()}
          {songs.length > ITEMS_PER_PAGE && (
            <div className={Style.scrollButtons}>
              <button 
               className={Style.scrollButton} 
               id={Style.left}
               onClick={prevPage} 
               disabled={currentPage === 1}>‹</button>
              <button 
               className={Style.scrollButton} 
               id={Style.right}
               onClick={nextPage} 
               disabled={currentPage === Math.ceil(songs.length / ITEMS_PER_PAGE)}>›</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
