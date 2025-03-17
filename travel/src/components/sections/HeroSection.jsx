import React from 'react'

const HeroSection = () => {
    const handleClick = (e) =>{
        e.preventDefault();
        
    }
  return (
    <div className="h-screen bg-cover bg-center relative"
    style={{ backgroundImage: `url({https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Discover Nepal</h1>
              <p className="text-xl mb-8">Experience the magic of the Himalayas, ancient temples, and rich cultural heritage</p>
              <button
               className="bg-[#DC143C] hover:bg-[#B01030] text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                onClick={handleClick}>
                Plan Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroSection