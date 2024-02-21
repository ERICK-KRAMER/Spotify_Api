import style from "../styles/search.module.css";
import { IoSearchOutline } from "react-icons/io5";

interface SearchProps {
  name: string,
  setName: (name: string) => void;
  searchMusic: () => void;
}

function Search({ name, setName, searchMusic }: SearchProps) {
  return (
    <div className={style.InputSearch}>
      <input
        type="text"
        name="search"
        placeholder="Song, Artist, User or Album"
        autoComplete="off"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <IoSearchOutline className={style.icon} type="button" onClick={ searchMusic }/>
    </div>
  );
}

export default Search;
