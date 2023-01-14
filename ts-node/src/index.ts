import { POkemon } from "./decorators/pokemon";
import { getPokemon } from "./generics/get-pokemon";
import { GenerationV } from './interfaces/pokemon';

const charmander = new POkemon('Charmander');

(POkemon.prototype as any).customName = 'MewTwo'

/* console.log(charmander.savePokemonToDG(-10)); */
charmander.publicApi = 'https;//fernando-herrera.com'
console.log(charmander);