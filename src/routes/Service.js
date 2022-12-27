import Hero from '../components/Hero'
import aboutImg from '../images/Hero2.jpg'
import '../components/Hero.css'
function Service() {
  return (
    <div>
        <Hero cName='hero-mid' 
     heroImg={aboutImg}
      title="Service"
       text="Go Where You Want"
       btnText="Travel plan"
       url='/'
       btnclass='show'/>
    </div>
  )
}

export default Service