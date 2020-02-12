import axios from 'axios';

export const getPokemons = async () => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
  const { results, next } = data;
  return { data: results, next };
};

export const getPokemon = async id => {
  const { data } = await axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`);
  return data;
};

export const getPokemonUrl = async url => {
  const { data } = await axios.get(url);
  return data;
}

export const getMorePokemons = async proximo => {
  const { data } = await axios.get(proximo);
  const { results, next } = data;
  return { data: results, next };
}

export const getPokemonHabilidade = async ability => {
  const { data } = await axios.get(`http://pokeapi.co/api/v2/ability/${ability}`);
  const pokemons = data.pokemon.map(d => d.pokemon);
  return pokemons;
}