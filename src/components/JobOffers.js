import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../authentication'
import styled from "styled-components";


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


const deleteJob = (id) =>{
  axiosWithAuth().delete(`/postings/${id}`).then(res=>{
      setData(res.data)
  })
}

    if (!data) {
      return <div>Loading Your Request...</div>;
    }
  
    return (
      <Cards>
        {data.map (job => (
        
       <Card>
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
            <button onClick={()=>{deleteJob(job.id)}}>DELETE</button>
       </Card>
        )
         )} 
        
         </Cards>
        )  
}
 

export default JobOffers





const Cards = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 1500px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 100px;
  height: 90% vh;
  padding-top: 50px;
  padding-bottom: 70px;
`;


const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 400px;
  height: 400px;
  border: 2px solid gainsboro;
  border-radius: 5px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.16);
  padding: 20px;
`;