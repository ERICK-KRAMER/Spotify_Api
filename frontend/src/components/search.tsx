import style from "../styles/search.module.css";
import { IoSearchOutline } from "react-icons/io5";
interface SearchProps {
  name: string,
  setName: (name: string) => void;
}

function Search({ name, setName }: SearchProps) {
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
      <IoSearchOutline className={style.icon}/>
    </div>
  );
}

export default Search;
