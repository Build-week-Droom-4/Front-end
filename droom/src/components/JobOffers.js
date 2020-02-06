import React, { useState, useEffect } from 'react';
import axios from 'axios';


const JobOffers = (props) => {

  

    const [data, setData] = useState();
   
    useEffect(() => {
      // const id = 1;
  
         axios
          .get(`https://droom4.herokuapp.com/api/postings`)
          .then(response => {
            console.log (response.data)
            setData(response.data);
            // console.log("this is job offers response", response )
          })
          .catch(error => {
            console.error(error);
          });
  
    },[]);
    

  
    if (!data) {
      return <div>Loading Your Request...</div>;
    }
  console.log(data);
    // const {  stars } = movie;
    return (
      <div className="save-wrapper">
        {data.map (job => (
          <div key= {job.id} cd className="movie-card">
          <h2>{job.job_title}</h2>
          <div className="movie-director">
            Company: <em>{job.company}</em>
          </div>
          <div className="movie-metascore">
            Description:  <strong>{job.job_desc}</strong>
          </div>
          <div className="movie-metascore">
            Contact:  <strong>{job.phone}</strong>
          </div>
          
  
          
        


          
        
        
      </div>
        )
         )} </div>
        )  
}
  export default JobOffers;
  