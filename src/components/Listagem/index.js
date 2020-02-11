import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as PokemonsActions from '../../actions/pokemonsActions';
import * as PokemonActions from '../../actions/pokemonActions';

import { Container } from './styles';

import Menu from '../../shared/Menu';
import Voltar from '../../shared/Voltar';

import More from '../../shared/More';

const Listagem = () => { 

  const pokemon = useSelector(state => state.pokemon);
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  const [ more, setMore ] = useState('');

  useEffect(() => {

    const fetch = () => {
      dispatch(PokemonsActions.getPokemons());
    }

    fetch();
  }, [dispatch]);

  const Lista = () => (
    <>
      <Menu palavra='Lista Pokemons'
        links={[
          { palavra: 'Nome ou Numero', path: '/numero' }, 
          { palavra: 'Habilidade', path: '/habilidade' }
        ]}
      />
      {pokemons.data && pokemons.data.map(p => 
        <div className='lista' key={p.url} onClick={e => {    
          e.preventDefault();
          dispatch(PokemonActions.getPokemonUrl(p.url))
          setMore(!more);
        }} >
          <span>{p.name}</span>
        </div>)}

      <button  className='carregaMais' onClick={e => {
        e.preventDefault();
        dispatch(PokemonsActions.getMorePokemons(pokemons.next))
      }}>Carregar outros Pokemons</button>
    </>
  );

  const ListaMore = () => (
    <>
      <Voltar palavra='Mais Informações' action={e => {
        e.preventDefault();
        setMore(!more);
      }} />
      <More pokemon={pokemon} />
    </>
  );
  
  return(
    <Container>
      { !more && Lista() }
      { more && ListaMore() }
    </Container>
  )
}

export default Listagem;