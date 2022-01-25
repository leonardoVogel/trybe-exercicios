import React, { Component } from 'react';
import Pokemon from './Pokemon';
import './pokedex.css'

export default class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;

    return (
    <div className="display">
      { pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />) }
    </div>
    );
  }
}
