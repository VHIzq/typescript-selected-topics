import { getPokemon } from "./generics/get-pokemon";
import { GenerationV } from './interfaces/pokemon';

getPokemon(3)
  .then(pokemon => console.log( pokemon.sprites.front_default ))
  .catch(error => console.log(error))
  .finally(() => console.log('FIn de getPokemon'))
