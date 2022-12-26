
import Hero from '../components/Hero'
import aboutImg from '../images/Hero2.jpg'
import '../components/Hero.css'
function Home() {
  return (
    <>
     <Hero cName='hero' 
     heroImg={aboutImg}
      title="Your journey Your Story"
       text="Go Where You Want"
       btnText="Travel plan"
       url='/'
       btnclass='show'/>
    </>
  )
}

export default Home
