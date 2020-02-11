import axios from 'axios'
import axiosWithAuth from '../authentication'

export const POST_COMPANY_REGISTER = 'POST_COMPANY_REGISTER';
export const POST_COMPANY_SUCCESS = 'POST_COMPANY_SUCCESS';
export const POST_COMPANY_FAILURE = 'POST_COMPANY_FAILURE';

export const LOGIN_COMPANY_REGISTER = 'LOGIN_COMPANY_REGISTER';
export const LOGIN_COMPANY_SUCCESS = 'LOGIN_COMPANY_SUCCESS';
export const LOGIN_COMPANY_FAILURE = 'LOGIN_COMPANY_FAILURE';

export const POST_JOB_INITIAL = 'POST_JOB_INITIAL';
export const POST_JOB_SUCCESS = 'POST_JOB_SUCCESS';
export const POST_JOB_FAILURE = 'POST_JOB_FAILURE';

export const DELETE_JOB_INITIAL = 'DELETE_JOB_INITIAL';
export const DELETE_JOB_SUCCESS = 'DELETE_JOB_SUCCESS';
export const DELETE_JOB_FAILURE = 'DELETE_JOB_FAILURE';



export const postCompany = (registerData, history) => dispatch => {
    dispatch({ type: POST_COMPANY_REGISTER});
 
   axios.post('https://droom4.herokuapp.com/api/auth/register', registerData )
    .then(response => {  console.log('Do we get to response?', response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role )
        dispatch({ type: POST_COMPANY_SUCCESS, payload: response.data })
        if(response.data.role === "employer"){
            history.push("/jobform");
          };
          if(response.data.role === "employee"){
            history.push("/joboffers");
          };
    })
    .catch(error => { console.log('ERROR', error.response.error)
        dispatch({ type: POST_COMPANY_FAILURE, payload: error.response.error})
        return alert("That Company Already Exists");

    })
}

export const loginCompany = (loginData, history) => dispatch => {
    dispatch({ type: LOGIN_COMPANY_REGISTER});
 
   axiosWithAuth().post('/auth/login', loginData )
    .then(response => {  console.log('Do we get to response?', response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role );
        dispatch({ type: LOGIN_COMPANY_SUCCESS, payload: response.data })
        if(response.data.role === "employer"){
            history.push("/jobform");
          };
          if(response.data.role === "employee"){
            history.push("/joboffers");
          };
        
    })
    .catch(error => { console.log('ERROR', error.response.error)
        dispatch({ type: LOGIN_COMPANY_FAILURE, payload: error.response.error})
        return alert("Not a Valid Login");
    })
}



export const postJob = (jobData, history) => dispatch => {
    dispatch({ type: POST_JOB_INITIAL});
   console.log('HI IM HERE', jobData)
   axiosWithAuth().post('/postings', jobData )
    .then(response => {  console.log('Do we get to JOB response?', response)
        dispatch({ type: POST_JOB_SUCCESS, payload: response.data})
        history.push("/yourjobs");
        localStorage.setItem('id', response.data.user_id)
    })
    .catch(error => { console.log('ERROR en JOBDATA', error)
        dispatch({ type: POST_JOB_FAILURE, payload: error});
        
    })
}


export const deleteJob = (jobData) => dispatch => {
    dispatch({ type: DELETE_JOB_INITIAL});
 
   axiosWithAuth().delete(`/postings/${jobData.id}`)
    .then(response => {  console.log('Do we get to JOB response?', response)
        dispatch({ type: DELETE_JOB_SUCCESS, payload: response.data })
    })
    .catch(error => { console.log('ERROR', error.response.error)
        dispatch({ type: DELETE_JOB_FAILURE, payload: error.response.error})
    })
}

