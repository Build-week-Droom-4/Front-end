import React from 'react';
import { CompanyForm, JobOffers, Navigation } from './components'
import './App.css';
import { Route } from 'react-router-dom'





const App = () => (
  <div>
    <Navigation />
    <Route exact path="/CompanyForm" component={CompanyForm}/>
    <Route  path="/JobOffers" component={JobOffers}/>
    
  </div>
);

export default App;