import React from 'react';

import HomePage from './components/pages/HomePage.jsx';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DestinationPage from './components/pages/DestinationPage.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element = {<HomePage />} />
          <Route path = "/destination/:id" element = {<DestinationPage />} />
        </Routes>
      </Router>
      
    </>
  );
}



export default App;