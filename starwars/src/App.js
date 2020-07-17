import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Navbar from './Navbar';
import Character from './components/Character'

const App = () => {
  const [query, setQuery] = useState('')
  const [pokemon, setPokemon] = useState([])
  const [filteredPokemon, setFilteredPokemon] = useState(null)
  //data
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

  useEffect(() => {
    axios.get(baseUrl + 1)
      .then(res => {
        console.log(res.data)
        setPokemon(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  if (pokemon.length === 0) {
    return (
      <h1>Loading</h1>
    )
  }

  return (
    <div className="App">
      <Navbar />
      <Character data={pokemon} />
    </div>
  );
}

export default App;
