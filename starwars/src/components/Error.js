import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import styled from 'styled-components'

const Header = styled.h1`
    font-size: 2rem;
    font-family: 'Overpass';
    flex-basis: 100%;
    text-align: center;
    margin: 10% auto 1% auto;
`

const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `

function Error() {

    const [pokemon, setPokemon] = useState(null)

    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
    const num = Math.floor(Math.random() * 150) + 1

    useEffect(() => {
        axios.get(baseUrl + num)
            .then(res => {
                setPokemon(res.data)
            })
    }, [])

    if (!pokemon) {
        return <h1>Loading</h1>
    }

    return (
        <Container>
            <Header>No pokemon found, but here's an {pokemon.name}.</Header>
            <Card data={pokemon} />
        </Container>
    )
}

export default Error