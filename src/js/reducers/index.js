import { combineReducers } from 'redux';

const defaultState = { tree: [], activeIndex: null }

function treeReducer(state = defaultState, action) {
  let newValue;
  switch (action.type) {
    case 'INCREMENT':
      newValue = state.value + 1;
      return Object.assign({}, state, { value: newValue });
    case 'DECREMENT':
      newValue = state.value - 1;
      return Object.assign({}, state, { value: newValue });
    default:
      return state;
  }
}  

// const rootReducer = combineReducers({treeReducer});
const rootReducer = treeReducer;

export default rootReducer;


