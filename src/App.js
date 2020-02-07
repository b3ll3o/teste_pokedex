import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import Listagem from './components/Listagem';
import ListaId from './components/ListaId';
import Habilidade from './components/Habilidade';

const App = () => (
  <Router>
    <Route path='/' exact>
      <Listagem />
    </Route>
    <Route path='/numero' exact>
      <ListaId />
    </Route>
    <Route path='/habilidade' exact>
      <Habilidade />
    </Route>
  </Router>
);


export default App;
