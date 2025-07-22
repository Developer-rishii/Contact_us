import React from 'react'
import Header from './components/Header'
import ContactInfo from './components/ContactInfo'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <ContactInfo />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default App
