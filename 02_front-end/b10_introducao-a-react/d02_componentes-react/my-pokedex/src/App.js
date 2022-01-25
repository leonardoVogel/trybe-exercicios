import React, { Component } from 'react';
import pokemons from './data';
import Pokedex from './Components/Pokedex';
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="pokedex">
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons}/>
      </div>
    );
  }
}

export default App;
