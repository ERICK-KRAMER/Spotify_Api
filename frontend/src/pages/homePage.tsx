import Search from "../components/search";
import Style from "../styles/homePage.module.css";

const HomePage = (): JSX.Element => {
  return (
    <div className={Style.container}>
      <div className={Style.search}>
        <Search />
        <div className={Style.trending}>
          <h1>Trending</h1>
          <div className={Style.songs}>SONGS</div>
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;
