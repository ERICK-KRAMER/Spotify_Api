import style from "../styles/search.module.css"
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  return (
    <div className={style.InputSearch}>
        <input type="text" name="search" placeholder="Song, Artist, User or Album" />
        <IoSearchOutline className={style.icon}/>
    </div>
  )
}

export default Search;