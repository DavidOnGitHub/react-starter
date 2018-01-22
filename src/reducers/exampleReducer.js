import * as Type from '../actions/Type';
import initialState from '../initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case Type.EXAMPLE_ACTION:
      return Object.assign({}, state, { example: action.id });
    default:
      return state;
  }
};
