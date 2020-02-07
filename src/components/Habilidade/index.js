import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from './styles';
import { ReactComponent as PesquisaIcon } from '../../asserts/svg/pesquisa.svg';

import Menu from '../../shared/Menu';
import More from '../../shared/More';
import Voltar from '../../shared/Voltar';

const Habilidade = () => {

  const [ habilidade, setHabilidade ] = useState('');
  const [ pokemons, setPokemons ] = useState([]);
  const [ pokemon, setPokemon ] = useState({});

  const [ more, setMore ] = useState(false);
  const [ url, setUrl ] = useState('');

  useEffect(() => {

    const getPokemonId = async () => {
      const { data } = await axios.get(`http://pokeapi.co/api/v2/ability/${habilidade}`);
      console.log(data);
      setPokemons(data.pokemon);
    }

    getPokemonId();
  }, [ habilidade ]);

  useEffect(() => {

    const getPokemon = async () => {
      const { data } = await axios.get(url);
      setPokemon(data);
    }

    getPokemon();
  }, [url]);

  const Lista = () => (
    <>
      <Menu palavra='Habilidades' 
        links={[
          { palavra: 'Lista Todos', path: '/' }, 
          { palavra: 'Nome/Numero', path: '/numero' } 
        ]} />
        
        <form onSubmit={e => {
          e.preventDefault();
        }}>
          <input placeholder='Habilidade do pokemon' 
            onChange={e => setHabilidade(e.target.value)} />
          <button type='submit'><PesquisaIcon /></button>
        </form>
        { pokemons && pokemons.map(res => 
        <div key={res.pokemon.url} className='lista' 
          onClick={e => {
            e.preventDefault();
            setUrl(res.pokemon.url);
            setMore(!more);
          }}>
          <span>{res.pokemon.name}</span>
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