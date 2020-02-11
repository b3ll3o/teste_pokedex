import { put, call, takeLatest } from 'redux-saga/effects';
import * as PokemonActions from '../actions/pokemonActions';
import * as api from './api';

function* getPokemonUrlEffects(action){
  try{
    const data = yield call(api.getPokemonUrl, action.payload.url);
    yield put(PokemonActions.getPokemonUrlSuccess(data));
  }catch(err){
    console.log(err);
    yield put(PokemonActions.getPokemonUrlFailure());
  }
}

function* getPokemonIdEffects(action){
  try{
    const data = yield call(api.getPokemon, action.payload.id);
    yield put(PokemonActions.getPokemonIdSuccess(data));
  }catch(err){
    console.log(err);
    yield put(PokemonActions.getPokemonIdFailure());
  }
}

function* mySaga(){
  yield takeLatest('GET_POKEMON_URL', getPokemonUrlEffects);
  yield takeLatest('GET_POKEMON_ID', getPokemonIdEffects);
}

export default mySaga;