import React from 'react'
import Header from '../Header'

import Footer from '../Footer'
import Container from '../Container'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
    <Header />
    <Container />

    {/* Footer */}
    <Footer />
  </div>
  )
}

export default HomePage