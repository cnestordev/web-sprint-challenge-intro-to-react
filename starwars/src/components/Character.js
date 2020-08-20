import React from 'react'
import Card from './Card'
import styled from 'styled-components'

function Character(props) {

    const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
    `

    if (props.data.length < 1) {
        return <h1>Loading Character</h1>
    } else {
        console.log("reached here")
        const cards = props.data.map(item => <Card key={item.id} data={item} />)
        return (
            <Container>
                {cards}
            </Container>
        )
    }
}

export default Character