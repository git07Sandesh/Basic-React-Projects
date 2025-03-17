import React from 'react'
import ServiceCard from '../cards/ServiceCard'
import { Coffee, Map, Users } from 'lucide-react'

const ServiceSection = () => {
  return (
    <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#003893]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Map className="w-8 h-8" />}
              title="Custom Tours"
              description="Personalized itineraries tailored to your interests"
            />
            <ServiceCard
              icon={<Users className="w-8 h-8" />}
              title="Local Guides"
              description="Experienced guides who know Nepal inside out"
            />
            <ServiceCard
              icon={<Coffee className="w-8 h-8" />}
              title="Cultural Experiences"
              description="Authentic interactions with local communities"
            />
          </div>
        </div>
      </div>
  )
}

export default ServiceSection