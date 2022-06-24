import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';

import Postagens from './components/Postagens/Postagens'
import DetalhesPostagem from './components/DetalhesPostagem/DetalhesPostagem'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>Noticias</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/" exact>
              <Postagens />
            </Route>
            <Route path="/postagens/:id" exact>
              <DetalhesPostagem />
            </Route>
            <Route path="/postagens">
              <Postagens />
            </Route>
            <Route path="*">
              <Postagens />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>

  );
}

export default App;
