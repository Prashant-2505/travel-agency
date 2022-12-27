import React from 'react'
import './Trip.css'

function TripData(props) {
  return (
    
        <>
         <div className="trip-card">
            <div className="card-image">
                <img src={props.image1} alt="japan" />
            </div>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
         </div>
        </>
    
  )
}

export default TripData