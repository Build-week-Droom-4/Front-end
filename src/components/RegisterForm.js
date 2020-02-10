import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postCompany, loginCompany } from '../actions/DroomActions'
import styled from "styled-components";
import axiosWithAuth from '../authentication';
import loader from '../images/loader.png'
import checked from '../images/checked.png'

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

    
    const handleLogin = (e) => {
      e.preventDefault()
      props.loginCompany(logInfo, props.history)
      if(regInfo.username === ""){
        return alert("Please enter a username");
      };
      if(regInfo.password === ""){
        return alert("Please enter a password");
      };
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
  
           <Form onSubmit={handleLogin}>
               <Input name='username' type='text' onChange={handleLoginChange} placeholder='name' value={logInfo.username} />
               <Input name='password' type='password' onChange={handleLoginChange} placeholder='password'  value={logInfo.password} />
               {console.log(logInfo)}
      <Button>LOGIN</Button>
           </Form>
     </Forms>

         {props.loading ?  <div><img src={loader} className='icon'/></div> : <div><img src={checked} className='icon'/></div> }
      </div>
    )
}




export default connect(
  state => {  
    return { loading: state.RegisterReducer.loading };
  },
  { postCompany: postCompany, loginCompany: loginCompany }
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
  background: #fff;
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
  -webkit-transition: background-color 1s ease-in; 
        transition: background-color 1s ease-in;
  }

`;
