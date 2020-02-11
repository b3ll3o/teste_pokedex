
export const getPokemons = () => ({
  type: 'GET_POKEMONS'
});

export const getPokemonsSuccess = (data, next) => ({
  type: 'GET_POKEMONS_SUCCESS', 
  payload: {
    data, next
  }
});

export const getPokemonsFailure = () => ({
  type: 'GET_POKEMONS_FAILURE'
});

export const getPokemon = id => ({
  type: 'GET_POKEMON', 
  payload: {
    id
  }
});

export const getPokemonSuccess = data => ({
  type: 'GET_POKEMON_SUCCESS', 
  payload: {
    data
  }
});

export const getPokemonFailure = () => ({
  type: 'GET_POKEMON_FAILURE'
});

export const getMorePokemons = next => ({
  type: 'GET_MORE_POKEMONS', 
  payload: {
    next
  }
});

export const getPokemonMoreSuccess = (data, next) => ({
  type: 'GET_MORE_POKEMONS_SUCSESS', 
  payload: {
    data, next
  }
});

export const getPokemonMoreFailure = (data, next) => ({
  type: 'GET_MORE_POKEMONS_FAILURE', 
});

export const getPokemonsAbility = ability => ({
  type: 'GET_POKEMONS_ABILITY', 
  payload: {
    ability
  }
});

export const getPokemonsAbilitySuccess = data => ({
  type: 'GET_POKEMONS_ABILITY_SUCCESS', 
  payload: {
    data
  }
});

export const getPokemonsAbilityFailure = ability => ({
  type: 'GET_POKEMONS_ABILITY_FAILURE'
});

