import { all } from 'redux-saga/effects';
import pokemonSaga from './pokemonSaga';
import pokemonsSaga from './pokemonsSaga';

export default function* sagas(){
  yield all([
    pokemonSaga(), 
    pokemonsSaga()
  ]);
}