var pokedex = pokedex
function pokeapi("https://pokeapi.co/api/v2/pokemon/");
const pokemon = results.map((result) => ({
    name: result.name,
    image: result.sprites['front_default'],
    type: result.types.map((type) => type.type.name).join(', '),
    id: result.id