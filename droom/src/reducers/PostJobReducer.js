
import { 
        POST_JOB_INITIAL,
        POST_JOB_SUCCESS,
        POST_JOB_FAILURE 
          } from '../actions/DroomActions'


 const initialState = {
            loading: false,
            companyData: null
        }


        export default (state = initialState, action) => {
            switch (action.type) {
        case POST_JOB_INITIAL: 
        return {
            ...state,
            loading : true
        };
        case POST_JOB_SUCCESS:
            return {
                ...state,
                loading : false, companyData: action.payload
            };
            case POST_JOB_FAILURE:
                return {
                    ...state,
                    register: action.payload
                };
                default:
                    return state
   }

   }
