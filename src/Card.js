import React from 'react'
import "./Card.css"

function Card({im , link}) {
  return (
    <div className='card'>
      <div className={im}>      <a target="_blank" href={link}>
        <span class="link"></span>
      </a></div>
    </div>
  )
}

export default Card
