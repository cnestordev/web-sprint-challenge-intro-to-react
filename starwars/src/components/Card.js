import React from 'react'

function Card(props) {

    const { name, id, types, sprites } = props.data

    return (
        <div style={{ background: "white", width: "30%" }}>
            <h4>{name}</h4>
            <img src={sprites.front_default} />
            <p>{id}</p>
            <p>{types[0].type.name}</p>
            <p>description</p>
        </div>
    )
}

export default Card