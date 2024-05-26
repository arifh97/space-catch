import { useEffect } from 'react'
import Aos from 'aos'
import Header from './components/Header'
import Banner from './components/Banner'
import Brands from './components/Brands'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import AboutVideo from './components/AboutVideo'
import Roadmap from './components/Roadmap'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    Aos.init({duration:1400,offset:0})
  },[])
  return (
    <>
      <Header />
      <Banner />
      <Brands />
      <About />
      <Tokenomics />
      <AboutVideo />
      <Roadmap />
      <Faq />
      <Footer />
    </>
  )
}
