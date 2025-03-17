import React from 'react'

const ServiceCard = ({ icon, title, description }) => {
  return (
   
          <div className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
            <div className="inline-block mb-4 text-[#DC143C]">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        );
}

export default ServiceCard