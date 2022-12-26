import Hero from '../components/Hero'
import aboutImg from '../images/Hero2.jpg'
import '../components/Hero.css'
function Contact() {
  return (
    <div>
         <Hero cName='hero' 
     heroImg={aboutImg}
      title="Contact"
       text="Go Where You Want"
       btnText="Travel plan"
       url='/'
       btnclass='show'/>
    </div>
  )
}

export default Contact