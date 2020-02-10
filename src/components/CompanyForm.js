import React, { useState } from "react";
import { connect } from 'react-redux';
import { postJob } from '../actions/DroomActions'
import styled from "styled-components";


const JForm = (props) => {

const [member, setMember] = useState({
  company: "", job_title: "", phone:"", email:"", job_desc:"", skills:"", pay:"",
});

const handleChanges = e => {
setMember({
    ...member, [e.target.name]: e.target.value});

};

const submitForm = e => {
e.preventDefault();

props.postJob(member, props.history);

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
<div>     
        {/* <Name>You are logged in as: {props.datos.username}</Name> */}

      <JobForm onSubmit={submitForm}>
      <Label>Company Name</Label>
      <Input
        id="name"
        type="text"
        placeholder="e.g: Microsoft"
        onChange={handleChanges}
        name="company"
      />


      <Label>Phone Number</Label>
      <Input
        id="phone"
        type="text"
        placeholder="e.g: +14244071014"
        onChange={handleChanges}
        name="phone"
      />
      <Label>Contact Email</Label>
      <Input
        id="phoemailne"
        type="text"
        placeholder="e.g: jobs@droom.com"
        onChange={handleChanges}
        name="email"
      />

      <Label>Job Position</Label>
      <Input
        id="position"
        type="text"
        placeholder="e.g: Engineer"
        onChange={handleChanges}
        name="job_title"
      /> 

      <Label>Required Skills</Label>
      <Input
        id="skills"
        type="text"
        placeholder="e.g: JavaScript, React, Node"
        onChange={handleChanges}
        name="skills"
      />
      <Label>Salary</Label>
      <Input
        id="pay"
        type="text"
        placeholder="e.g: $80.000"
        onChange={handleChanges}
        name="pay"
      />
        <Label>Job Description</Label>
      <Input
        id="job_desc"
        type="text"
        placeholder="describe the position"
        onChange={handleChanges}
        name="job_desc"
      />

     
      <Button>Post Job</Button>
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
  width: 500px;;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 700px;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 70px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.16);
  `;

  
const Label = styled.label`
font-size: 0.9rem;
font-weight: 600;
color: #3c4257;
`;


const Input = styled.input`
 height: 25px;
 border-radius: 5px;
 width: 200px;
 margin-bottom: 5px;

`;



const Button = styled.button`
 height: 40px;
 width: 120px;
 border-radius: 5px;
 margin-top: 25px;
 font-weight: 700;
 font-size: 0.8rem;
 background: dodgerblue;
 color: white;
 border: 1px solid dodgerblue;
 
&:hover {
  background-color: #db74ff;
  border: 1px solid #db74ff;
  -webkit-transition: background-color 0.5s ease-in; 
        transition: background-color 0.5s ease-in;
  }

`;


  



const Name = styled.form`
   font-size: 1.4rem;
   font-weight: 700;
   color: dodgerblue;
   width: 95%;
   margin-bottom: 30px;

  `;