import React from 'react';
import { CompanyForm, JobOffers, Navigation } from './components'
import Foot from './components/Foot'
import "./App.css";
import RegisterForm from './components/RegisterForm'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
       <GlobalStyles/>
  <BrowserRouter>
    <Navigation />
     <Switch>
        <PrivateRoute exact path="/jobform" component={CompanyForm}/>
        <PrivateRoute exact path="/joboffers" component={JobOffers}/>
        <Route exact path="/" component={RegisterForm} />
     </Switch>
     <Foot />
  </BrowserRouter>
  
  </div>
)
}
export default App;