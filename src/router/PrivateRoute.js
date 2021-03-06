import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {

 let token = localStorage.getItem('token')

 return(
    <Route 
    {...rest}
    render={props=>{
        console.log('THIS IS COMPONENT', Component)
        return token ? <Component {...props} /> : <Redirect to="/" />
    }}
    
    />
 )
}


export default PrivateRoute