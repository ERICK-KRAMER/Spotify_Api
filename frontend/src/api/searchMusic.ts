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
