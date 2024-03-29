import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObj1, homeObj2 } from '../components/InfoSection/Data'
import Partners from '../components/Partners'
import Footer from '../components/Footer'

function Home() {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...homeObj1}/>
      
      <InfoSection {...homeObj2}/>
      <Partners />
      <Footer />
    </>
  )
}

export default Home
