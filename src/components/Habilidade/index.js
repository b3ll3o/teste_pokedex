import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as PokemonsActions from '../../actions/pokemonsActions';
import * as PokemonActions from '../../actions/pokemonActions';


import { Container } from './styles';
import { ReactComponent as PesquisaIcon } from '../../asserts/svg/pesquisa.svg';

import Menu from '../../shared/Menu';
import More from '../../shared/More';
import Voltar from '../../shared/Voltar';

const Habilidade = () => {

  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);
  const pokemon = useSelector(state => state.pokemon);

  const [ habilidade, setHabilidade ] = useState('');

  const [ more, setMore ] = useState(false);

  const Lista = () => (
    <>
      <Menu palavra='Habilidades' 
        links={[
          { palavra: 'Lista Todos', path: '/' }, 
          { palavra: 'Nome/Numero', path: '/numero' } 
        ]} />
        
        <form onSubmit={e => {
          e.preventDefault();
          dispatch(PokemonsActions.getPokemonsAbility(habilidade))
        }}>
          <input placeholder='Habilidade do pokemon' 
            onChange={e => setHabilidade(e.target.value)} />
          <button type='submit'><PesquisaIcon /></button>
        </form>
        { pokemons.data && pokemons.data.map(p => 
          <div key={p.url} className='lista' 
        
            onClick={e => {
              e.preventDefault();
              dispatch(PokemonActions.getPokemonUrl(p.url));
              setMore(!more);
            }}>
            <span>{p.name}</span>
          </div>)}
    </>
  );

  const ListaMore = () => (
    <>
      <Voltar palavra='Mais informações' action={e => {
        e.preventDefault();
        setMore(!more);
      }} />
      <More pokemon={pokemon} />
    </>
  );

  return (
    <Container>
      { !more && Lista() }
      { more && ListaMore() }
    </Container>
  );
}

export default Habilidade;