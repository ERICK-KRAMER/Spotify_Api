import style from "../styles/Song.module.css"
import CapaMusic from "../../public/Thats_The_Spirit.jpg"

const Song = () => {
  return (
    <div className={style.container}>
      <div className={style.imageSong}>
        <img src={CapaMusic} alt="imageSong" />
        <div className={style.titleSong}>
            <h2>Titulo da musica</h2>
            <h4>banda</h4>
        </div>
      </div>
      <div className={style.audio}>
          <audio src="/" controls />
      </div>
    </div>
  )
}
export default Song;