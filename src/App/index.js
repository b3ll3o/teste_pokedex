import React, { useState, useEffect } from 'react';

import { ReactComponent as VoltarIcon } from '../asserts/svg/voltar.svg';
import { ReactComponent as MenuIcon } from '../asserts/svg/menu.svg';

import { Container } from './styles';

const axios = require('axios').default;

const App = () => {

  const [ url, setUrl ] = useState('');
  
  const [ more, setMore ] = useState(false);
  const [ menu, setMenu ] = useState(false);

  const [ listaId, setListaId ] = useState(false);
  const [ listaHabilidade, setListaHabilidade ] = useState(false);

  const [ pokemons, setPokemons ] = useState([]);
  const [ pokemon, setPokemon ] = useState({});

  useEffect(() => {
    
    const getData = async () => {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      const { results } = data;
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

  const Menu = ({ palavra, action, links }) => (
    <>
      <div className='header'>
        <div className='icon'>
          <MenuIcon onClick={e => {
            e.preventDefault();
            action(e);
          }} />
        </div>
        <span>{palavra}</span>
      </div>

      { menu && 
        <div className='menuGaveta'>
          <div className='menu'>
            {links && links.map(link => 
              <button onClick={e => {
                e.preventDefault();
                action(e);
              }}>{link.palavra}</button>)}
          </div>
          <div className='fundo' onClick={e => {
            e.preventDefault();
            setMenu(!menu);
          }}></div>
        </div>}
    </>
  );

  const Voltar = ({ palavra, action }) => (
    <div className='header'>
      <div className='icon'>
        <VoltarIcon onClick={e => {
          e.preventDefault();
          action(e);
        }} />
      </div>
      <span>{palavra}</span>
    </div>
  );
  
  const Listagem = () => (
    <div className='listagem'>
      <Menu palavra='Lista Pokemons' action={e => {
        e.preventDefault();
        setMenu(!menu);
      }}
        links={[
          { palavra: 'Nome ou Numero' }, 
          { palavra: 'Habilidade' }
        ]} />
      {pokemons && pokemons.map(p => 
        <div className='lista' key={p.url} onClick={e => {
          e.preventDefault();
          setUrl(p.url);
          setMore(!more);
        }} >
          <span>{p.name}</span>
        </div>)}
    </div>
  );

  const ListaId = () => (
    <div className='listaId'>
      <Menu palavra='Buscar Nome/Numero' action={e => {
        e.preventDefault();
        setListaId(!listaId);
      }}
        links={[
          { palavra: 'Lista Todos', action: e => {
            e.preventDefault();
            setListaId(!listaId);
          }}, 
          { palavra: 'Busca Habilidade', action: e => {
            e.preventDefault();
            setListaHabilidade(!listaHabilidade);
          }} 
        ]} />
    </div>
  )

  const More = () => (
    <div className='more'>
      <Voltar palavra='Mais Informações' action={e => {
        e.preventDefault();
        setMore(!more);
      }} />
      { pokemon && 
        <div className='pokemon'>
          <img className='pokemonImage' 
            data-src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt="" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            data-holder-rendered="true">
          </img>
          <span>{pokemon.name}</span>
          <span>{pokemon.height}</span>
          <span>{pokemon.weight}</span>
        </div>}
    </div>
  );

  return (
    <Container>
      { !more && Listagem() }
      { more && More() }
    </Container>
  );
}

export default App;
