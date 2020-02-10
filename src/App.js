import React from 'react';
import { CompanyForm, JobOffers, Navigation } from './components'
import Foot from './components/Foot'
import "./App.css";
import RegisterForm from './components/RegisterForm'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './router/PrivateRoute'


const App =  () => {

  return (
    <div className="App">
  <BrowserRouter>
    <Navigation />
     <Switch>
        <Route exact path="/" component={RegisterForm} />
        <PrivateRoute exact path="/jobform" component={CompanyForm}/>
        <PrivateRoute exact path="/joboffers" component={JobOffers}/>
     </Switch>
     <Foot />
  </BrowserRouter>
  </div>
)
}
export default App;