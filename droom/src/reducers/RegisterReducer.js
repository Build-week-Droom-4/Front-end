
import { 
    POST_COMPANY_REGISTER,
       POST_COMPANY_SUCCESS,
       POST_COMPANY_FAILURE 
      } from '../actions/DroomActions'

    
    

  
  
      const initialState = {
          username : '',
          loading: false,
          role: '',
          password: '',
          token: '',
          companyData: null
      }
  
  
      export default (state = initialState, action) => {
      switch (action.type) {
          case POST_COMPANY_REGISTER: 
          return {
              ...state,
              loading : true
          };
          case POST_COMPANY_SUCCESS:
              return {
                  ...state,
                  loading : false, token: action.payload
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
  