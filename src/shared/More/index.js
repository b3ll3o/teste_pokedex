import React from 'react';

import { Container } from './styles';

const More = ({ pokemon }) => (
  <Container>
    { pokemon && 
      <div className='pokemon'>
        {pokemon.id && <img className='pokemonImage' 
          data-src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt="" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          data-holder-rendered="true">
        </img>}
        <div className='informacoes'>
          <span>Nome: {pokemon.name}</span>
          <span>Altura: {pokemon.height}</span>
          <span>Peso: {pokemon.weight}</span>
          <span>Id: {pokemon.id}</span>
          <span>Experiencia base: {pokemon.base_experience}</span>
        </div>
      </div>}
  </Container>
);


export default More;