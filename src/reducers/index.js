import { combineReducers } from 'redux';

import pokemon from './pokemonReducer';
import pokemons from './pokemonsReducer';

export default combineReducers({
  pokemon, 
  pokemons
});