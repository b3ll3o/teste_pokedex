
const initialState = {};

const reducers = (state=initialState, action) => {
  switch(action.type){

    case 'GET_POKEMONS_SUCCESS': {
      const { data, next } = action.payload;
      return {data, next};
    }

    case 'GET_MORE_POKEMONS_SUCSESS': {
      const { data, next } = action.payload;
      return { data, next };
    }

    case 'GET_POKEMONS_ABILITY_SUCCESS': {
      const { data } = action.payload;
      const { next } = state;
      return { data, next };
    }

    default: {
      return state;
    }
      
  }
}
export default reducers;
