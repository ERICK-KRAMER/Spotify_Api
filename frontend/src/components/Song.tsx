import style from "../styles/Song.module.css"
import { useContext } from "react"
import PlayMusicContext from "../context/playMusic"

const Song = () => {
  const { track } = useContext(PlayMusicContext);

  if (!track || !track.album) {
    return <div></div>;
  }

  return (
    <div className={style.container}>
      <div className={style.imageSong}>
        <img src={track.album.images[0].url} alt="imageSong" />
        <div className={style.titleSong}>
          <h2>{track.name}</h2>
          <h4>{track.artists.map((artist, index) => (
            <span key={artist.id}>
              {artist.name}
              {index < track.artists.length - 1 && ','}
            </span>))}
          </h4>
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
