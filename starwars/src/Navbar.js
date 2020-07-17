import React from 'react'
import styled from 'styled-components'
//data
const Nav = styled.nav`
    background: #f8c505;
    padding: 1% 5%;
`

const Input = styled.input`
    background: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    font-size: 1.2rem;
    margin-right: 2%;
    padding: 1% 2%;
    width: 50%;

    &::placeholder {
        color: #fff;
    }
`

const Button = styled.button`
    border: 1px solid #fff;
    border-radius: 5px;
    background: #fff;
    color: #000;
    padding: 1% 3%;

    &:hover {
        cursor: pointer;
        background: #f0f0f0;
        border-color: #f0f0f0;
    }
`

function Navbar(props) {

    const { query, handler, search } = props

    function handleChange(e) {
        handler(e.target.value.toLowerCase())
    }

    return (
        <header>
            <Nav>
                <Input
                    value={query}
                    type="text"
                    placeholder="Search by Name or id"
                    onChange={handleChange}
                />
                <Button onClick={() => search(query)}>Search</Button>
            </Nav>
        </header>
    )
}

export default Navbar