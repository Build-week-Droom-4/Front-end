import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
      <div>
        <div className="App">
          <h1>Droom4</h1>
          <div>
            <Link to="/CompanyForm">Company Sign-In Form</Link>
          </div>
          <div>
            <Link to="/JobOffers">Job Offers</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navigation;
  