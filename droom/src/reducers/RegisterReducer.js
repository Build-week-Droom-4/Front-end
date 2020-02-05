
import { 
  POST_COMPANY_REGISTER,
     POST_COMPANY_SUCCESS,
     POST_COMPANY_FAILURE 
    } from '../actions/DroomActions'

    
    const initialState = {
        register: []
    }


    export default (state = initialState, action) => {
    switch (action.type) {
        case POST_COMPANY_REGISTER: 
        return {
            ...state,
            register: action.payload
        };
        case POST_COMPANY_SUCCESS:
            return {
                ...state,
                register: action.payload
            };
            case POST_COMPANY_FAILURE:
                return {
                    ...state,
                    register: action.payload
                };
                default:
                     return state
    }

    }
