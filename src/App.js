import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';
// function App () {
  
class App extends Component {
  state = {
    comentarios: []
  }

  componentDidMount() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://jsonplaceholder.typicode.com/posts', false );
    xmlHttp.send( null );
    const comentarios = JSON.parse(xmlHttp.responseText);
      
    this.setState({
      comentarios
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Meu projeto desafio 02 fullcycle</h1>

        {
          this.state.comentarios.map((comentario, indice) => (
            <Comentario
              userId={comentario.userId}
              id={comentario.id}
              title={comentario.title}
              body={comentario.body}
              key={comentario.indice}
            />
          ))
        }
      </div>
    );
  }
}

export default App;
