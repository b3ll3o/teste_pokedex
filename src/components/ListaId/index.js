import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as PokemonActions from '../../actions/pokemonActions';

import { ReactComponent as PesquisaIcon } from '../../asserts/svg/pesquisa.svg';

import { Container } from './styles';

import Menu from '../../shared/Menu';
import More from '../../shared/More';

const ListaId = () => {
  
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon);

  const [ id, setId ] = useState('');

  return (
 
    <Container>
      <Menu palavra='Nome/Numero' 
        links={[
          { palavra: 'Lista Todos', path: '/' }, 
          { palavra: 'Habilidade', path: '/habilidade' } 
        ]} />
        
        <form onSubmit={e => {
          e.preventDefault();
          dispatch(PokemonActions.getPokemonId(id));
        }}>
          <input placeholder='Codigo do pokemon' 
            onChange={e => setId(e.target.value)} />
          <button type='submit'><PesquisaIcon /></button>
        </form>
        { pokemon.name && <More pokemon={pokemon} />}
    </Container>
  );
}

export default ListaId;