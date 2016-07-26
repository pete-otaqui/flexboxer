import defaultNavigation from '../../data/defaults.json';
import {
  SET_NAVIGATION
} from '../actions';

const defaultNavigationState = defaultNavigation;

export default function navigation(state = defaultNavigationState, action) {
  switch(action.type) {
    case SET_NAVIGATION:
      return Object.assign({}, state, action.navigation);
    default:
      return state;
  }
}
