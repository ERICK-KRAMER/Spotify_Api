// api.ts
import axios from "axios";

export async function searchMusic(name: string) {
  const endpoint = `http://localhost:3000/musica/${name}`;
  try {
    const response = await axios.get(endpoint);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao entrar em contato com o servidor!");
  }
}

export async function topTracks(id:string){
  const endpoit = `http://localhost:3000/topTracksArtist/${id}`;
  try {
    const respose = await axios.get(endpoit)
    const data = respose.data;
    return data;
  } catch (error) {
    throw new Error("Erro ao entra em contato com o servidor!");
  }
}

