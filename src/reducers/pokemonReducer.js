const initialState = {};

export default (state=initialState, action) => {
  switch(action.type){

    case 'GET_POKEMON_URL_SUCCESS': {
      const { data } = action.payload;
      return data;
    }

    case 'GET_POKEMON_ID_SUCCESS': {
      const { data } = action.payload;
      return data;
    }

    default: 
      return state;
  }
}