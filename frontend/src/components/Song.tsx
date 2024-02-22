import style from "../styles/Song.module.css"
import { useContext } from "react"
import PlayMusicContext from "../context/playMusic"

const Song = () => {
  const { track } = useContext(PlayMusicContext);

  if (!track || !track.album) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.imageSong}>
        <img src={track.album.images[0].url} alt="imageSong" />
        <div className={style.titleSong}>
            <h2>{track.name}</h2>
            <h4>{track.artists[0].name}</h4>
        </div>
      </div>
      <div className={style.audio}>
          <audio src={track.preview_url} controls />
      </div>
      <button onClick={ ()=>{ console.log(track) }}>test</button>
    </div>
  )
}
export default Song;
