import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Navbar from './Navbar';
import Character from './components/Character'
import Error from './components/Error'

const App = () => {
  const [query, setQuery] = useState('')
  const [pokemon, setPokemon] = useState([])
  const [error, setError] = useState(false)

  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

  function handleSearch(query) {
    setError(false)
    query = query || "pikachu"
    axios.get(baseUrl + query)
      .then(res => {
        setPokemon([res.data])
      })
      .catch(err => {
        console.log(err)
        setError(true)
      })
  }

  useEffect(() => {
    for (let i = 0; i < 8; i++) {
      let num = Math.floor(Math.random() * 150) + 1
      axios.get(baseUrl + num)
        .then(res => {
          setPokemon(prevValue => {
            return [...prevValue, res.data]
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [])

  if (pokemon.length === 0) {
    return (
      <h1>Loading</h1>
    )
  }

  if (error) {
    return (
      <div className="App">
        <Navbar search={handleSearch} query={query} handler={setQuery} />
        <Error />
      </div>
    )
  }

  return (
    <div className="App">
      <Navbar search={handleSearch} query={query} handler={setQuery} />
      <Character data={pokemon} />
    </div>
  );
}

export default App;
