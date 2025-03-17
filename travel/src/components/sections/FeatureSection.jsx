import React from 'react'
import FeatureCard from '../cards/FeatureCard'
import { Mountain as Mountains, BookTemplate as Temple, Camera, } from 'lucide-react'

const FeatureSection = () => {
  return (
    <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#003893]">Why Visit Nepal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Mountains className="w-8 h-8 text-[#DC143C]" />}
              title="Majestic Mountains"
              description="Home to eight of the world's highest peaks, including Mount Everest"
            />
            <FeatureCard
              icon={<Temple className="w-8 h-8 text-[#DC143C]" />}
              title="Rich Heritage"
              description="Ancient temples, historic cities, and UNESCO World Heritage sites"
            />
            <FeatureCard
              icon={<Camera className="w-8 h-8 text-[#DC143C]" />}
              title="Adventure"
              description="Trekking, rafting, and wildlife safaris in diverse landscapes"
            />
          </div>
        </div>
      </div>
  )
}

export default FeatureSection