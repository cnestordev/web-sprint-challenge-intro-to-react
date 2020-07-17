import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: white;
    border-radius: 8px;
    box-shadow: 0 0 7px 1px #e6e6e6;
    flex-basis: 20%;
    font-family: 'Overpass';
    margin: 2%;
    padding: 1% 0 2% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Name = styled.h4`
    font-weight: bold;
    margin: 0;
    padding: 0;
    margin-top: 5%;
`

function Card(props) {
    //data
    const { name, id, types, sprites, weight } = props.data

    return (
        <Container>
            <Name>{name}</Name>
            <img src={sprites.front_default} />
            <p>id: {id}</p>
            <p>{types[0].type.name}</p>
            <p>weight: {weight}</p>
        </Container>
    )
}

export default Card