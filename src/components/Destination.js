import React from 'react'
import './Destination.css'
import image1 from '../images/Spiti-valley-1.jpg'
import image2 from '../images/Spiti-valley-2.jpg'
import image3 from '../images/Bali-1.jpg'
import image4 from '../images/Bali-2.jpg'
import DestinationData from './DestinationData'

const Destination = () => {
    return (
        <>
            <div className='destination'>
                <h1>Popular Destination</h1>
                <p>Your dream destination is waiting for come and keet it in your <b>LIFE FRAME.</b></p>
                <DestinationData
                    cName = "first-des"
                    heading="Spiti Valley"
                    text="This majestic cold desert valley in Himachal Pradesh is replete with pine forests, green meadows, beautiful monasteries and inhabited villages that will leave you totally awe-stuck. Situated at an altitude of around 12,500 ft above the sea level the barren mountains over here change their hues every second and it is definitely a sight to behold. The tiny villages over here under the shadow of huge mountains have a population of around 35 to 200 people. This sparsely inhabited land is a slice of paradise for all those who’re yearning to cut off from the intoxicating city life. "
                    image1={image1}
                    image2={image2}
                />

                <DestinationData
                 cName = "first-des-reverse"
                    heading="Tanah Lot - Bali"
                    text="Located on a beautiful offshore rock in Tabanan regency, Bali, Tanah Lot or 'Land on the Sea' is a Hindu shrine believed to be about 500 years old. An amalgamation of Balinese and Hindu mythology, the base of the temple is carved with sea snakes and offers a natural source of holy water, providing visitors with an aesthetic and spiritual experience unlike any other Located on a beautiful offshore rock in Tabanan regency, Bali, Tanah Lot or 'Land on the Sea' is a Hindu shrine believed to be about 500 years old. An amalgamation of Balinese and Hindu mythology, the base of the temple is carved with sea snakes and offers a natural source of holy water, providing visitors with an aesthetic and spiritual experience unlike any other... "
                    image1={image3}
                    image2={image4}
                />

            </div>
        </>

    )
}

export default Destination 