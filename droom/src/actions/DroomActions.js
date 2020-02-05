import axios from 'axios';

export const POST_COMPANY_REGISTER = 'POST_COMPANY_REGISTER';
export const POST_COMPANY_SUCCESS = 'POST_COMPANY_SUCCESS';
export const POST_COMPANY_FAILURE = 'POST_COMPANY_FAILURE';

export const postCompany = () => dispatch => {
    dispatch({ type: POST_COMPANY_REGISTER});

    axios.post('https://droom4.herokuapp.com//api/auth/register ')
    .then(response => {  console.log(response.data)
        dispatch({ type: POST_COMPANY_SUCCESS, payload: response.data })
    })
    .catch(error => {
        dispatch({ type: POST_COMPANY_FAILURE, payload: error.response.error})
    })
}