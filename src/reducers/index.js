import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import example from './exampleReducer';

export default combineReducers({
  root: example,
  form: formReducer
});
