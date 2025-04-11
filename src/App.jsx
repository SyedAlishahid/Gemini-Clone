import React from 'react'
import Sidebar from './Components/Sidebar';
import HeroSection from './Components/HeroSection';
const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <HeroSection />
    </div>
  )
}

export default App