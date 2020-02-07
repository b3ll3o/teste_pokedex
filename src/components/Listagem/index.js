import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from './styles';

import Menu from '../../shared/Menu';
import Voltar from '../../shared/Voltar';

import More from '../../shared/More';

const Listagem = () => { 

  const [ pokemons, setPokemons ] = useState([]);
  const [ pokemon, setPokemon ] = useState({});

  const [ url, setUrl ] = useState('');
  const [ more, setMore ] = useState('');
  const [ proximo, setProximo ] = useState('');

  useEffect(() => {
    
    const getData = async () => {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      const { results, next } = data;
      setProximo(next);
      setPokemons(results);
    }

    getData();
  }, []);

  useEffect(() => {

    const getPokemon = async () => {
      const { data } = await axios.get(url);
      setPokemon(data);
    }

    getPokemon();
  }, [url]);


  const getMorePokemons = async () => {
    const { data } = await axios.get(proximo);
    const { results, next } = data;
    setProximo(next);
    setPokemons(results);
  }

  const Lista = () => (
    <>
      <Menu palavra='Lista Pokemons'
        links={[
          { palavra: 'Nome ou Numero', path: '/numero' }, 
          { palavra: 'Habilidade', path: '/habilidade' }
        ]}
      />

      {pokemons && pokemons.map(p => 
        <div className='lista' key={p.url} onClick={e => {
          e.preventDefault();
          setUrl(p.url);
          setMore(!more);
        }} >
          <span>{p.name}</span>
        </div>)}

      <button  className='carregaMais' onClick={e => {
        e.preventDefault();
        getMorePokemons();
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