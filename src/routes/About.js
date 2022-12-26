
import Hero from '../components/Hero'
import AboutImg from '../images/Hero.jpg'
import '../components/Hero.css'

function About() {
  return (
    <div>
      <Hero cName='hero-mid'
        heroImg={AboutImg}
        title="About" 
      />
    </div>
  )
}

export default About
