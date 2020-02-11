export const getPokemonUrl = url => ({
  type: 'GET_POKEMON_URL', 
  payload: {
    url
  }
});

export const getPokemonUrlSuccess = data => ({
  type: 'GET_POKEMON_URL_SUCCESS', 
  payload: {
    data
  }
});

export const getPokemonUrlFailure = () => ({
  type: 'GET_POKEMON_URL_FAILURE'
});

export const getPokemonId = id => ({
  type: 'GET_POKEMON_ID', 
  payload: {
    id
  }
});

export const getPokemonIdSuccess = data => ({
  type: 'GET_POKEMON_ID_SUCCESS', 
  payload: {
    data
  }
});

export const getPokemonIdFailure = () => ({
  type: 'GET_POKEMON_ID_FAILURE'
});