import { useAppMusic } from "../../context/appMusicContext"

const Details = () => {
  const { hasMusic, currentSong } = useAppMusic();

  return (
    <aside
      className={`w-1/4 fixed right-0 top-0 bg-neutral-600 p-2 h-screen flex items-end justify-between gap-4 flex-col transition duration-500 rounded-tl-md
      ${hasMusic ? 'translate-x-0' : 'translate-x-[475px]'}`}
    >
      <div>
        <img src={currentSong?.album.images[1].url} alt={currentSong?.name} />
        <h1>{currentSong?.name}</h1>
        <small>{currentSong?.available_markets}</small>
      </div>
      <div className="flex flex-wrap p-10">
        {currentSong?.artists.map(artist => (
          <div>
            <img src={artist.href} alt={artist.name} />
            <p>{artist.name}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export { Details };
