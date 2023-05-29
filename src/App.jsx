import React from 'react'
import Header from "./components/header/Header.jsx"
import Nav from "./components/nav/Nav.jsx"
import About from "./components/about/About.jsx"
import Services from "./components/services/Services.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx"
import Contact from "./components/contacts/Contact.jsx"
import Footer from "./components/footer/Footer.jsx"
 {/*import Experience from './components/experience/Experience.jsx'*/}


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    {/*<Experience/>*/}
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
