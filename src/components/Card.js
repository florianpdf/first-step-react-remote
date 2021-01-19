import React, { Component } from 'react'
import TextFiled from './TextFiled'

class Card extends Component {
  render() {
    const { name, lastName, age, city } = this.props

    return (
      <ul>
        <li>Name: {name}</li>
        <li>Prenom: {lastName}</li>
        <li className={ age < 18 ? 'red' : 'green' }>Age: {age}</li>
        <li>Ville: {city}</li>
        <li><TextFiled /></li>
      </ul>
    )
  }
}

export default Card
