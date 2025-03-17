// src/components/DestinationPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the dynamic parameter (id)
import destinationsData from '../data/destinations.json'; // Import the data
import guidesData from '../data/guides.json';

const DestinationPage = () => {
  // Get the destination id from the URL
  const { id } = useParams();
  const [guide, setGuide] = useState(null);

  // Find the destination from the data using the id
  const destination = destinationsData.find(dest => dest.id === parseInt(id));

  useEffect(() => {
    if(destination)
    {
      setGuide(guidesData[destination.id]);
    }
  }, [destination])


  if (!destination) {
    // If the destination is not found
    return <div>Destination not found</div>;
  }

  return (
    <div className="destination-page py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{destination.title}</h2>
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-64 object-cover mb-8"
        />
        <p className="text-lg">{destination.description}</p>
        {guide && (
          <>
            <div className="guide-section mb-8">
              <h3 className="text-2xl font-semibold mb-4">Top Places to Visit</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {guide.places.map((place, index) => (
                  <div key={index} className="card bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold mb-4">{place.name}</h4>
                    <p className="text-gray-600 mb-4">{place.description}</p>
                    {/* Optionally, add an image or additional content here */}
                    <button className="text-blue-500 hover:underline">Learn More</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="guide-section mb-8">
  <h3 className="text-2xl font-semibold mb-4">Activities</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {guide.activities.map((activity, index) => (
      <div key={index} className="card bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-xl font-semibold mb-4">{activity.name}</h4>
        <p className="text-gray-600 mb-4">{activity.description}</p>
        <div className="rating mb-4">
          <span className="text-yellow-400">★</span>
          <span>{activity.rating}</span>
        </div>
        <button className="text-blue-500 hover:underline">Learn More</button>
      </div>
    ))}
  </div>
</div>
          </>
        )}

      </div>
    </div>
  );
};

export default DestinationPage;
