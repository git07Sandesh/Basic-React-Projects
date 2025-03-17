import React from 'react'
import { Link } from 'react-router-dom'

const DestinationCard = ({ image, title, description, destinationId }) => {
  return (
    <Link to={`destination/${destinationId}`} className="bg-[#DC143C] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
    </Link>
  )
}

export default DestinationCard