import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../authentication'


const JobOffers = () => {

 
  const [data, setData] = useState();

  
    useEffect(() => {
 axiosWithAuth().get('/postings')
  .then(response => {  setData(response.data)
  })
  .catch(error => { console.log('ERROR', error.response.error)
  })
}
,[data]);


const deleteSmurf = (id) =>{
  axiosWithAuth().delete(`/postings/${id}`).then(res=>{
      setData(res.data)
  })
}

    if (!data) {
      return <div>Loading Your Request...</div>;
    }
  
    return (
      <div className="save-wrapper">
        {data.map (job => (
          <div className="job-card">
          <h2>{job.job_title}</h2>
          <div className="job-company">
            Company: <em>{job.company}</em>
          </div>
          <div className="job-discription">
            Description:  <strong>{job.job_desc}</strong>
          </div>
          <div className="job-contact">
            Contact:  <strong>{job.email}</strong>
          </div>
          <div className="job-url">
            Website:  <strong>{job.company_url}</strong>
          </div>
          <div className="job-level">
            Exp Level:  <strong>{job.skills}</strong>
          </div>
          <div className="job-pay">
            Salary:  <strong>{job.pay }</strong>
          </div>
          <button onClick={()=>{deleteSmurf(job.id)}}>DELETE</button>
      </div>
        )
         )} 
        
         </div>
        )  
}
 

export default JobOffers