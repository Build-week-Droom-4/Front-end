import React, { useState, useEffect } from 'react';
import axios from 'axios';


const JobOffers = (props) => {

  

    const [data, setData] = useState();
   
    useEffect(() => {
      // const id = 1;
  
         axios
          .get(`https://swapi.co/api/people`)
          .then(response => {
            setData(response.data.results);
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
        {data.map (movie => (
          <div className="movie-card">
          <h2>{movie.name}</h2>
          <div className="movie-director">
            Director: <em>{movie.gender}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{movie.height}</strong>
          </div>
          <h3>Actors</h3>
  
          )}
        


          
        
        <div className="save-button">Save</div>
      </div>
        )
         )} </div>
        )  
}
  export default JobOffers;
  