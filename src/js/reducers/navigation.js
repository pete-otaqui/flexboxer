import defaultNavigation from '../../data/defaults.json';
import {
  SET_NAVIGATION
} from '../actions';

const defaultNavigationState = defaultNavigation;

export default function navigation(state = defaultNavigationState, action) {
  let nav;
  switch(action.type) {
    case SET_NAVIGATION:
      nav = JSON.parse(JSON.stringify(action.navigation || {}));
      return Object.assign({}, state, nav);
    default:
      return state;
  }
}
