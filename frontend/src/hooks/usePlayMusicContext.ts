import { useContext } from "react";
import  PlayMusicContext  from "../context/playMusic"

export const usePlayMusicContext = () => {
    const context = useContext(PlayMusicContext);
    if(context === undefined) throw new Error('Não faz parte do contexto');
    return(context);
}