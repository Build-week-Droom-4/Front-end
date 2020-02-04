import React from 'react';
import CompanyFrom from './components/CompanyForm.js';
import './App.css';
import JobOffers from './components/JobOffers.js';
// import OfferList from './components/OfferList.js';




function App() {
  return (
    <div className="App">
      <CompanyFrom/>
      <JobOffers/>
      {/* <OfferList/> */}
    </div>
  );
}

export default App;
