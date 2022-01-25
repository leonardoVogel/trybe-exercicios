import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './pokemon.css';

export default class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    
    return (
      <div className="card">
        <p className="name">{name}</p>
        <p className="type">{type}</p>
        <p className="weight">{`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <img className="image" src={image} alt={name} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
}
