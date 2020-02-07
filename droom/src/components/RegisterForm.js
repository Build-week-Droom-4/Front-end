import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { postCompany } from '../actions/DroomActions'

const RegisterForm = (props) => {

    const [regInfo, setRegInfo] = useState({
        username: '',
        role: '',
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

    localStorage.setItem('token', props.token)


    return (
      <div>
           <Link to='/register'>Register</Link>
        <Link to='/jobform'>Post a Job</Link>
            <h2>Register to post your Job Offer!</h2>
         <form onSubmit={handleSumbit}>
             <input name='username' type='text' placeholder='name' onChange={handleChange} value={regInfo.username} />
             <input name='role' type='text' placeholder='role' onChange={handleChange} value={regInfo.role} />
             <input name='password' type='password' placeholder='password' onChange={handleChange} value={regInfo.password} />
             {console.log(regInfo)}
           <button>POST YOUR JOB OFFER</button>
         </form>

         {props.loading ?  <h2>Loading</h2> : <h2>NotLoading</h2>}
      </div>
    )
}



export default connect(
  state => {  
    return { loading: state.RegisterReducer.loading, token: state.RegisterReducer.token };
  },
  { postCompany }
)(RegisterForm);
