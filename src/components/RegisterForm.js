import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postCompany } from '../actions/DroomActions'
import styled from "styled-components";
import axiosWithAuth from '../authentication';

const RegisterForm = (props) => {


    const [regInfo, setRegInfo] = useState({
        username: '',
        role: 'employer',
        password: ''
    })

    const [logInfo, setLogInfo] = useState({
      username: '',
      password: ''
  })

    const handleChange = (e) =>{
        setRegInfo({
          ...regInfo, 
          [e.target.name] : e.target.value  
        })
    }
    
    const handleRegister = (e) => {
        e.preventDefault()
        props.postCompany(regInfo, props.history)
        if(regInfo.username === ""){
          return alert("Please enter a username");
        };
        if(regInfo.password === ""){
          return alert("Please enter a password");
        };
    }

    const handleLoginChange = (e) =>{
      setLogInfo({
        ...logInfo, 
        [e.target.name] : e.target.value  
      })
    }
    
   
    return (
      <div>
     <Forms>
             
           <Form onSubmit={handleRegister}>
               <Input name='username' type='text' placeholder='name' onChange={handleChange} value={regInfo.username} />
               <select name="role" type='select' name="role" value={regInfo.role} className='select-input'>
                 <option value="employer">Employer</option>
                 <option value="employee">Employee</option>
               </select>
               <Input name='password' type='password' placeholder='password' onChange={handleChange} value={regInfo.password} />
               {console.log(regInfo)}
      <Button>REGISTER</Button>
           </Form>
  
           <Form onSubmit={handleRegister}>
               <Input name='username' type='text' onChange={handleLoginChange} placeholder='name' value={logInfo.username} />
               <Input name='password' type='password' onChange={handleLoginChange} placeholder='password'  value={logInfo.password} />
               {console.log(logInfo)}
      <Button>LOGIN</Button>
           </Form>
     </Forms>

         {props.loading ?  <h2>Loading</h2> : <h2>Not Loading</h2>}
      </div>
    )
}




export default connect(
  state => {  
    return { loading: state.RegisterReducer.loading };
  },
  { postCompany }
)(RegisterForm);




const Forms = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-left: 350px;
  padding-right: 350px;
  padding-top: 50px;
  padding-bottom: 50px;
  `;


const Form = styled.form`
  margin: 0 auto;
  width: 300px;;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  border: 1px solid black;
  background: dodgerblue;
  padding: 50px;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.16);
  `;

const Input = styled.input`
 height: 35px;
 border-radius: 5px;
 width: 200px;

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
