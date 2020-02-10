import React, { useState } from "react";
import { connect } from 'react-redux';
import { postJob } from '../actions/DroomActions'
import styled from "styled-components";


const JForm = (props) => {

const [member, setMember] = useState({
  company:"", job_title: "", phone:"", email:"", job_desc:"", skills:"", pay:"",
});

const handleChanges = e => {
setMember({
    ...member, [e.target.name]: e.target.value});

};

const submitForm = e => {
e.preventDefault();

props.postJob(member);

if(member.company === ""){
  return alert("Please enter a Company");
};
if(member.job_title === ""){
  return alert("Please enter a Job Title");
};
if(member.phone === ""){
  return alert("Please enter a Phone Number");
};
if(member.email === ""){
  return alert("Please enter an Email");
};
if(member.job_desc === ""){
  return alert("Please enter a Job Description");
};
if(member.skills === ""){
  return alert("Please enter Required Skills");
};
if(member.pay === ""){
  return alert("Please enter the Salary Ammount");
};
}

return (
<div>     <Name>You are logged in as: {props.datos.username}</Name>
      <JobForm onSubmit={submitForm}>
      <label htmlFor="name">Company Name</label>
      <Input
        id="name"
        type="text"
        placeholder={props.datos.username}
        onChange={handleChanges}
        name="company"
      />


      <label htmlFor="phone">Company Phone Number</label>
      <Input
        id="phone"
        type="text"
        placeholder="Number"
        onChange={handleChanges}
        name="phone"
      />
      <label htmlFor="email">Contact Email</label>
      <Input
        id="phoemailne"
        type="text"
        placeholder="E-Address"
        onChange={handleChanges}
        name="email"
      />

<label htmlFor="position">Job Position</label>
      <Input
        id="position"
        type="text"
        placeholder="Position"
        onChange={handleChanges}
        name="job_title"
      /> 

      <label htmlFor="skills">Required Skills</label>
      <Input
        id="skills"
        type="text"
        placeholder="Skills"
        onChange={handleChanges}
        name="skills"
      />
      <label htmlFor="pay">Salary</label>
      <Input
        id="pay"
        type="text"
        placeholder="Pay"
        onChange={handleChanges}
        name="pay"
      />
            <label htmlFor="job_desc">Job Description</label>
      <Input
        id="job_desc"
        type="text"
        placeholder="Description"
        onChange={handleChanges}
        name="job_desc"
      />

      {/* <Link to="/joboffers"> */}
      <Button type="submit">Become Member</Button>
      {/* </Link> */}
      </JobForm>

</div>
);

}


export default connect(
 state => {  
    return { datos : state.RegisterReducer.registerData};
  },
  { postJob }
)(JForm);





const JobForm = styled.form`
  margin: 0 auto;
  width: 400px;;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 700px;
  border: 1px solid black;
  background: dodgerblue;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.16);
  `;

const Input = styled.input`
 height: 30px;
 border-radius: 5px;
 width: 200px;
 margin-bottom: 5px;

`;

const Button = styled.button`
 height: 50px;
 width: 250px;
 border: 2px solid pink;
 border-radius: 5px;
 margin-top: 25px;
 
&:hover {
  background-color: #ED1D68;
  -webkit-transition: background-color 1s ease-in; 
        transition: background-color 1s ease-in;
  
  }

`;

  



const Name = styled.form`
   font-size: 1.4rem;
   font-weight: 700;
   color: dodgerblue;
   width: 95%;
   margin-bottom: 30px;

  `;