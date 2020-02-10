
import { 
    LOGIN_COMPANY_REGISTER,
       LOGIN_COMPANY_SUCCESS,
       LOGIN_COMPANY_FAILURE 
      } from '../actions/DroomActions'

    

      const initialState = {
          loading: false,
          registerData: null
      }
  
  
      export default (state = initialState, action) => {
      switch (action.type) {
          case LOGIN_COMPANY_REGISTER: 
          return {
              ...state,
              loading : true
          };
          case LOGIN_COMPANY_SUCCESS:
              return {
                  ...state,
                  loading : false, loginData: action.payload
              };
              case LOGIN_COMPANY_FAILURE:
                  return {
                      ...state,
                      loginData: action.payload
                  };

                  default:
                       return state
      }
  
      }
  