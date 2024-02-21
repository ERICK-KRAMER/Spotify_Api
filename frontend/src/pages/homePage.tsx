import { useContext, useEffect, useState } from "react";
import Search from "../components/search";
import Style from "../styles/homePage.module.css";
import axios from "axios";
import { AppContext } from "../context/request.music";

const ITEMS_PER_PAGE = 6;

const HomePage = (): JSX.Element => {
  const [name, setName] = useState("");
  const { songs, setSongs } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);

  const searchMusic = async (): Promise<void> => {
    const endpoint = `http://localhost:3000/musica/${name}`;
    try {
      const response = await axios.get(endpoint);
      // console.log(response.data.searchResult.tracks.items);
      setSongs(response.data.searchResult.tracks.items)
      setCurrentPage(1);
    } catch (error) {
      console.log(error);
    }
  };  
  
  useEffect(() => {
    if (name !== "") {
      searchMusic();
    }
  }, [name]);

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const renderSongs = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentSongs = songs.slice(startIndex, endIndex);

    return (
      <div className={Style.songs}>
        {currentSongs.map(song => (
          <div className={Style.track} key={song.id} onClick={()=>{ setSongs(song) }}>
            <img src={song.album.images[1].url} alt={song.name}/>
            <h3>{song.name}</h3>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={Style.container}>
      <div className={Style.search}>
        <Search setName={setName} name={name} searchMusic={searchMusic} />
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
