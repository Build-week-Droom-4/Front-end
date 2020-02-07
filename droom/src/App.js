import React from 'react';
import { CompanyForm, JobOffers, Navigation } from './components'
import Foot from './components/Foot'
import "./App.css";
import RegisterForm from './components/RegisterForm'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './router/PrivateRoute'



import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira Sans');
  body {
    font-family: 'Fira Sans', sans-serif;
  }
`



const App =  () => {

  return (
    <div className="App">
    <Navigation />
  <Router>
    <GlobalStyles/>
   

     <Switch>
       
        <Route exact path='/register' component={RegisterForm} />
        <PrivateRoute exact path="/jobform" component={CompanyForm}/>
        <PrivateRoute exact path="/joboffers" component={JobOffers}/>
     </Switch>


    
  </Router>
  <Foot />
  </div>
)
}
export default App;