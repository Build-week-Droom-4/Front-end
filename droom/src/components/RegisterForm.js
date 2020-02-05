import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { postCompany } from '../actions/DroomActions'



const RegisterForm = (props) => {

    const [regInfo, setRegInfo] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) =>{
        setRegInfo({
          ...regInfo, 
          [e.target.name] : e.target.value  
        })
    }
    
    const handleSumbit = (e) => {
        e.preventDefault()
        props.postCompany(regInfo)
    }

    return (
      <div>
            <h2>Register to post your Job Offer!</h2>
         <form onSubmit={handleSumbit}>
             <input name='username' type='text' onChange={handleChange} value={regInfo.username} />
             <input name='password' type='password' onChange={handleChange} value={regInfo.password} />
           <button>POST YOUR JOB OFFER</button>
         </form>
      </div>
    )
}


export default connect(
    state => { 
    return { };
  }, 
      { postCompany : postCompany } 
  )(RegisterForm);