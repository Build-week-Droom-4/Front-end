import React, { useState } from "react";
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { postJob } from '../actions/DroomActions'

console.log(postJob)

const Form = (props) => {
console.log (props.postJob);

const [member, setMember] = useState({
  company:"", job_title: "", phone:"", email:"", job_desc:"", skills:"", pay:"",
});

const handleChanges = e => {
setMember({
    ...member, [e.target.name]: e.target.value});

};

const submitForm = e => {
e.preventDefault();
console.log('HI IM INSIDE SUBMIT!!!!')
props.postJob(member);
}

return (
<div>
      <form onSubmit={submitForm}>
      <label htmlFor="name"> Name</label>
      <input
        id="name"
        type="text"
        placeholder="Name"
        onChange={handleChanges}
        name="company"
      />

      <label htmlFor="position">Position</label>
      <input
        id="position"
        type="text"
        placeholder="Position"
        onChange={handleChanges}
        name="job_title"
      />

      <label htmlFor="phone">Contact</label>
      <input
        id="phone"
        type="text"
        placeholder="Number"
        onChange={handleChanges}
        name="phone"
      />
      <label htmlFor="email">Email</label>
      <input
        id="phoemailne"
        type="text"
        placeholder="E-Address"
        onChange={handleChanges}
        name="email"
      />
      <label htmlFor="job_desc">Job Description</label>
      <input
        id="job_desc"
        type="text"
        placeholder="Description"
        onChange={handleChanges}
        name="job_desc"
      />
      <label htmlFor="skills">Skills</label>
      <input
        id="skills"
        type="text"
        placeholder="Skills"
        onChange={handleChanges}
        name="skills"
      />
      <label htmlFor="pay">Salary</label>
      <input
        id="pay"
        type="text"
        placeholder="Pay"
        onChange={handleChanges}
        name="pay"
      />
      {/* <Link to="/joboffers"> */}
      <button type="submit">Become Member</button>
      {/* </Link> */}
      </form>

</div>
);

}


export default connect(
  state => {  console.log(state)
    return { loading: state.PostJobReducer.loading  };
  },
  { postJob }
)(Form);
