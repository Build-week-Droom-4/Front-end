import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../authentication'
import styled from "styled-components";
import { connect } from 'react-redux';


const CompanyJobs = (props) => {

    
  const [data, setData] = useState();

console.log(props.company)

let identity = props.company.user_id
  
  useEffect(() => {
axiosWithAuth().get(`/postings/users/${identity}`)
.then(response => {  console.log(response)
    setData(response.data)
})
.catch(error => { console.log('ERROR', error)
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
          <Button onClick={()=>{deleteJob(job.id)}}>DELETE</Button>
     </Card>
      )
       )} 
      
       </Cards>
      )  

 
}
 



export default connect(
    state => {  console.log(state)
      return { company : state.PostJobReducer.companyData };
    },
    {  }
  )(CompanyJobs);
  
  





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
`;


const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 400px;
  height: 300px;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.16);
  padding: 20px;
  margin-bottom: 20px;
`;

const Name = styled.div`
  color: #5469d4;
`;



const Button = styled.button`
 height: 30px;
 width: 80px;
 border-radius: 5px;
 margin-top: 25px;
 font-weight: 700;
 font-size: 0.8rem;
 background: #db74ff;
 color: white;
 border: 1px solid #db74ff;

 
&:hover {
  background-color: dodgerblue;
  border: 1px solid dodgerblue;
  -webkit-transition: background-color 0.5s ease-in; 
        transition: background-color 0.5s ease-in;
  }

`;