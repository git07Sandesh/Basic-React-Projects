import React, { useEffect, useState } from 'react'
import DestinationCard from '../cards/DestinationCard'
import destinationsData from '../data/destinations.json'


const DestinationSection = () => {
    const [destinations, setDestinations] = useState([])

useEffect(() => {
    setDestinations(destinationsData)
}, destinationsData)
  return (
    <div className="py-20 bg-slate-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16 text-[#003893]">Popular Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {
            destinations.map(destination => {
                return(
                <DestinationCard
                  key={destination.id}
                  title={destination.title}
                  image={destination.image}
                  description={destination.description}
                  destinationId={destination.id} />)
                
            })
        }
        
      </div>
    </div>
  </div>
  )
}

export default DestinationSection