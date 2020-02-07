
    
import { 
    DELETE_JOB_INITIAL,
    DELETE_JOB_SUCCESS,
    DELETE_JOB_FAILURE 
         } from '../actions/DroomActions'
        
        

         const initialState = {
            loading: false,
            companyData: null
        }
    
    
        export default (state = initialState, action) => {
        switch (action.type) {
          
                            case DELETE_JOB_INITIAL: 
                            return {
                                ...state,
                                loading : true
                            };
                            case DELETE_JOB_SUCCESS:
                                return {
                                    ...state,
                                    loading : false, companyData: action.payload
                                };
                                case DELETE_JOB_FAILURE:
                                    return {
                                        ...state,
                                        register: action.payload
                                    };
                    default:
                         return state
        }
    
        }
    