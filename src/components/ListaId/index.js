import React, { useState, useEffect } from 'react';

import { ReactComponent as PesquisaIcon } from '../../asserts/svg/pesquisa.svg';

import { Container } from './styles';

import Menu from '../../shared/Menu';
import More from '../../shared/More';

import axios from 'axios';

const ListaId = () => {
  
  const [ id, setId ] = useState('');
  const [ pokemon, setPokemon ] = useState('');
  const [ submited, setSubmited ] = useState(false);

  useEffect(() => {

    const getPokemonId = async () => {
      const { data } = await axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`);
      console.log(data);
      setPokemon(data);
    }

    getPokemonId();
  }, [ submited, id ]);

  return (
 
    <Container>
      <Menu palavra='Nome/Numero' 
        links={[
          { palavra: 'Lista Todos', path: '/' }, 
          { palavra: 'Habilidade', path: '/habilidade' } 
        ]} />
        
        <form onSubmit={e => {
          e.preventDefault();
          setSubmited(!submited);
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