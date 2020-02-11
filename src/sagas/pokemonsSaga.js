import { takeLatest, put, call } from 'redux-saga/effects';
import * as PokemonsActions from '../actions/pokemonsActions';

import * as api from './api';

function* getPokemonsEffects(action){
  try{
    const { data, next } = yield call(api.getPokemons); 
    yield put(PokemonsActions.getPokemonsSuccess(data, next));
  }catch(err){
    console.log(err);
    yield put(PokemonsActions.getPokemonsFailure());
  }
}

function* getPokemonEffects(action){
  try{
    const { id } = action.payload;
    const { data } = yield call(api.getPokemon, id);
    yield put(PokemonsActions.getPokemonSuccess(data));
  }catch(err){
    console.log(err);
    yield put(PokemonsActions.getPokemonFailure());
  }
}

function* getPokemonMoreEffects(action){
  try{
    const { data, next } = yield call(api.getMorePokemons, action.payload.next);
    yield put(PokemonsActions.getPokemonMoreSuccess(data, next));
  }catch(err){
    console.log(err);
    yield put(PokemonsActions.getPokemonFailure());
  }
}

function* getPokemonsAbilityEffects(action){
  try{
    const data = yield call(api.getPokemonHabilidade, action.payload.ability);
    yield put(PokemonsActions.getPokemonsAbilitySuccess(data));
  }catch(err){
    console.log(err);
    yield put(PokemonsActions.getPokemonsAbilityFailure());
  }
}



function* mySaga(){
  yield takeLatest('GET_POKEMONS', getPokemonsEffects);
  yield takeLatest('GET_POKEMON', getPokemonEffects);
  yield takeLatest('GET_MORE_POKEMONS', getPokemonMoreEffects);
  yield takeLatest('GET_POKEMONS_ABILITY', getPokemonsAbilityEffects);
}

export default mySaga;
