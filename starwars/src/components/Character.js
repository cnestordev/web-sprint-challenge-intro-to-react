import React from 'react'
import Card from './Card'

function Character(props) {

    return (
        <div>
            <Card data={props.data} />
        </div>
    )
}

export default Character