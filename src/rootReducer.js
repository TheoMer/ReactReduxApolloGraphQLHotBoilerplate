import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxForm } from 'redux-form'
import counter from 'modules/counter/ducks'


const rootReducer = combineReducers({
  routing: routerReducer,
  form: reduxForm,
  counter,
})

export default rootReducer
