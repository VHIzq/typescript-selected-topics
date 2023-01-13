import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  const urlBase: string = 'https://pokeapi.co/api/v2/pokemon';

  const { data } = await axios.get<Pokemon>(`${urlBase}/${pokemonId}`);
  
  return data;

}