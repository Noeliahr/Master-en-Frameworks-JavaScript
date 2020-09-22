import React from 'react';
import logo from './logo.svg';
import './assets/css/App.css';
import MiComponente from './components/MiComponente';

function HolaMundo(nombre, edad) {
  var presentacion = <div>
    <h3>Hola, soy {nombre} y estoy aprendiendo react.js</h3>
    <h4>Tengo {edad} años</h4>
  </div>;

  return presentacion;
}

function App() {
  var nombre = "Noelia";
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {HolaMundo(nombre, 21)}
        </p>
        <section> 
          <MiComponente/>
        </section>
      </header>
    </div>
  );
}

export default App;
