import React from 'react'
import HeroSection from './sections/HeroSection';
import FeatureSection from './sections/FeatureSection';
import DestinationSection from './sections/DestinationSection';
import ServiceSection from './sections/ServiceSection';

const Container = () => {

      
     
  return (
   <>
    {/* Hero Section */}
    <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Popular Destinations */}
     <DestinationSection />

      {/* Services Section */}
      <ServiceSection />
   </>
  )
}

export default Container
