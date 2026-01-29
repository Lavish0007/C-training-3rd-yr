import React from 'react'
import './card.css'

function Card({ name, image, studentClass, roll, details }) {
  return (
    <div className="student-card">
      <h3>My Card</h3>
      <div className="card-top">
        <img src={image} alt={name} className="card-avatar" />
      </div>

      <div className="card-body">
        <h3 className="card-name">{name}</h3>
        <p className="card-meta">{studentClass}{roll ? ` • ${roll}` : ''}</p>

        {details && details.length > 0 && (
          <ul className="card-details">
            {details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Card