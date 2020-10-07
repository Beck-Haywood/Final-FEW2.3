import React from 'react'

function Character(props) {
    return (
        <div>
            <hr/>
            <p>Name: {props.name}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Homeworld: {props.homeworld}</p>
        </div>
    )
}

export default Character