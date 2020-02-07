import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as MenuIcon } from '../../asserts/svg/menu.svg';

import Header from '../../styles/Header';

const Menu = ({ palavra, action, links }) => {
  
  const [ menu, setMenu ] = useState(false);

  return (
    <Header>
      <div className='icon'>
        <MenuIcon onClick={e => {
          e.preventDefault();
          setMenu(!menu);
        }} />
      </div>
      <span>{palavra}</span>

    { menu && 
      <div className='menuGaveta'>
        <div className='menu'>
          {links && links.map(link => 
            <Link to={link.path}>
              {link.palavra}
            </Link>)}
        </div>
        <div className='fundo' onClick={e => {
          e.preventDefault();
          setMenu(!menu);
        }}>
        </div>
      </div>}
    </Header>
  )
};

export default Menu;