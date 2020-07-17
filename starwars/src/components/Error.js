import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
    font-size: 2rem;
    text-align: center;
    margin: 10% auto;
`

function Error() {
    return (
        <div>
            <Header>No pokemon by that name found, try again.</Header>
        </div>
    )
}

export default Error