import { combineReducers } from 'redux'

import RegisterReducer from './RegisterReducer'
import PostJobReducer from './PostJobReducer'
import DeleteJobs from './DeleteJobs'

export default combineReducers({
    RegisterReducer,
    PostJobReducer,
    DeleteJobs
})