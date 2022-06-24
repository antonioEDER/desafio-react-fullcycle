import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';

import Postagens from './components/Postagens/Postagens'
import DetalhesPostagem from './components/DetalhesPostagem/DetalhesPostagem'
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>Início</NavLink>
              </li>
              <li>
                <NavLink to="/postagens">Postagens</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/postagens/:id">
              <DetalhesPostagem />
            </Route>
            <Route path="/postagens">
              <Postagens />
            </Route>
            <Route path="*">
              <h1>404</h1>
              <p>Página não encontrada!</p>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>

  );
}

export default App;
