
import Hero from '../components/Hero'
import aboutImg from '../images/Hero2.jpg'
import '../components/Hero.css'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Hero cName='hero'
        heroImg={aboutImg}
        title="Your journey Your Story"
        text="Go Where You Want"
        btnText="Travel plan"
        url='/'
        btnclass='show' />

      <Destination />

      <Trip/>

      <Footer/>
    </>

  )
}

export default Home
