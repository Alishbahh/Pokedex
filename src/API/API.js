import axios from "axios";

export const getPokemonList = async (limit, offset) => {
  try {
    const pokemons = await axios.get(
      ` https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    return pokemons.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getPokemonDetails = async (id) => {
  try {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return pokemon.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
