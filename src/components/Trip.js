import React from 'react'
import './Trip.css'
import image1 from '../images/Japan.jpg'
import image2 from '../images/London.jpg'
import image3 from '../images/Maldives.jpg'
import TripData from './TripData'

function Trip() {
    return (
        <>
            <div className="trip">
                <h1>Popular Destination</h1>
                <p>You can discover <b>Peace</b> while travelling... </p>

                <div className="tripcard">
                    <TripData
                        image1={image1}
                        title="Japan, Tokyo"
                        text="After a pair of quiet years, Japan has reopened its borders, and Tokyo’s distinct energy is back in full force. There's so much to see, including new shopping megaplexes, elegant hotels, and restaurants with rising-star chefs at their helms."
                    />
                    <TripData
                        image1={image2}
                        title="London"
                        text="I love finding the buildings that are ‘hidden gems’ and celebrating them. I seek out estates, houses and municipal buildings that Londoners know but never really get excited about and show them in a different light. That’s the challenge for me as an artist and as a Londoner The diversity."
                    />
                    <TripData
                        image1={image3}
                        title="Maldives"
                        text="The Maldives comprises an array of mesmerizing coral islands. Encompassing lush green forested terrains, white-sandy beaches, and bluest of waters, the country offers a perfectly blissful vacation to travellers. The Maldives houses captivating landmarks and offers numerous exhilarating activities to partake in."
                    /> 
                </div>
            </div>
        </>
    )
}

export default Trip