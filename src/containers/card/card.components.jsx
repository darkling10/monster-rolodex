import React from 'react'

import '../card/card.styles.css'


export const Card = (props) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="monsters" />
            <h1 >{props.monster.name}</h1>
            <p >{props.monster.username}</p>
        </div>
    )
}
