import axios from 'axios'
import axiosWithAuth from '../authentication'

export const POST_COMPANY_REGISTER = 'POST_COMPANY_REGISTER';
export const POST_COMPANY_SUCCESS = 'POST_COMPANY_SUCCESS';
export const POST_COMPANY_FAILURE = 'POST_COMPANY_FAILURE';

export const POST_JOB_INITIAL = 'POST_JOB_INITIAL';
export const POST_JOB_SUCCESS = 'POST_JOB_SUCCESS';
export const POST_JOB_FAILURE = 'POST_JOB_FAILURE';

export const DELETE_JOB_INITIAL = 'DELETE_JOB_INITIAL';
export const DELETE_JOB_SUCCESS = 'DELETE_JOB_SUCCESS';
export const DELETE_JOB_FAILURE = 'DELETE_JOB_FAILURE';



export const postCompany = (registerData) => dispatch => {
    dispatch({ type: POST_COMPANY_REGISTER});
 
   axios.post('https://droom4.herokuapp.com/api/auth/register', registerData )
    .then(response => {  console.log('Do we get to response?', response)
        dispatch({ type: POST_COMPANY_SUCCESS, payload: response.data.token })
    })
    .catch(error => { console.log('ERROR', error.response.error)
        dispatch({ type: POST_COMPANY_FAILURE, payload: error.response.error})
    })
}


export const postJob = (jobData) => dispatch => {
    dispatch({ type: POST_JOB_INITIAL});
   console.log('HI IM HERE', jobData)
   axiosWithAuth().post('/postings', jobData )
    .then(response => {  console.log('Do we get to JOB response?', response)
        dispatch({ type: POST_JOB_SUCCESS, payload: response.data})
    })
    .catch(error => { console.log('ERROR en JOBDATA', error.response.error)
        dispatch({ type: POST_JOB_FAILURE, payload: error.response.error})
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

