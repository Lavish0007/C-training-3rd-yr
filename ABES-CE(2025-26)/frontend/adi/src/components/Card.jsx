import React from 'react'
import './card.css'
function Card(props) {
    return (
        <div id="adi">
            <img src="https://t4.ftcdn.net/jpg/08/59/96/83/360_F_859968386_VJvuQGaabAo4ysnvNTT0kwHWlv2x7skm.jpg" alt="" height={100} width={100} />
            <h1>{props.name}</h1>
            <h3>{props.edu}</h3>
        </div>
    )
}

export default Card