import React from 'react'
import styled from 'styled-components'
//data
const Nav = styled.nav`
    background: red;
    padding: 1% 5%;
`

function Navbar() {
    return (
        <header>
            <Nav>
                <input type="text" placeholder="Search by Name or id" />
            </Nav>
        </header>
    )
}

export default Navbar