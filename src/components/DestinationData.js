import React from 'react'
import './Destination.css'

function DestinatioData(props) {

    return (

        <>
            <div className='destination'>
                <div className={props.cName}>
                    <div className="des-text">
                        <h2>{props.heading}</h2>
                        <p>{props.text}</p>
                    </div>
                    <div className="image">
                        <img src={props.image1} alt="Spiti Valley" />
                        <img src={props.image2} alt="Spiti Valley" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default DestinatioData