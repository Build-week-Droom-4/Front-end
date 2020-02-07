import React from 'react';
import './App.css';
import { CompanyForm, JobOffers, Navigation } from './components'
import RegisterForm from './components/RegisterForm'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './router/PrivateRoute'


function App () {
  return (
  <Router>
    <div className="App">
      <Navigation />
     <Switch>
        <Route exact path='/register' component={RegisterForm} />
        <PrivateRoute exact path="/jobform" component={CompanyForm}/>
        <PrivateRoute exact path="/joboffers" component={JobOffers}/>
     </Switch>
    </div>
  </Router>
);
}
export default App;