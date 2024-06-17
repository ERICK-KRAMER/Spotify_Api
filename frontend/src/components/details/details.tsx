import { useAppMusic } from "../../context/appMusicContext"

const Details = () => {
  const { hasMusic } = useAppMusic();

  return (
    <aside
      className={`w-1/4 fixed right-0 top-0 bg-neutral-600 p-2 h-screen flex items-end justify-between gap-4 flex-col transition duration-500 rounded-tl-md
      ${hasMusic ? 'translate-x-0' : 'translate-x-[475px]'}`}
    >
    </aside>
  );
};

export { Details };
