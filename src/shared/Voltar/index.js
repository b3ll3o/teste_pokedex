import React from 'react';

import { ReactComponent as VoltarIcon } from '../../asserts/svg/voltar.svg';

import Header from '../../styles/Header';

const Voltar = ({ palavra, action }) => (
  <Header>
    <div className='icon'>
      <VoltarIcon onClick={e => {
        e.preventDefault();
        action(e);
      }} />
    </div>
    <span>{palavra}</span>
  </Header>
);

export default Voltar;