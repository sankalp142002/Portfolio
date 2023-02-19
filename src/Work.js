import React from 'react'
import "./Work.css"
import Card from './Card'

function Work() {
  return (
    <div className='work'>
        <h1 className="about-head"> "Work?" </h1>
        <div className="tiles-sec">
          <Card im={"img1"} link={"https://github.com/sankalp142002/Netflix"} />
          <Card im={"img2"} link={"https://github.com/sankalp142002/translator-app"} />
          <Card im={"img3"} link={"https://github.com/sankalp142002?tab=repositories&q=mini&type=&language=&sort="} />
          <Card im={"img4"} link={"https://github.com/sankalp142002/Real-time-chat"} />
        </div>
    </div>
  )
}

export default Work