import tape from 'tape';

import navigation from './navigation';
import {
  SET_NAVIGATION
} from '../actions';

tape('reducers/navigation: Uses default navigation', (assert) => {
  assert.plan(1);
  const state = undefined;
  const action = {
    type: SET_NAVIGATION
  };
  const newState = navigation(state, action);
  assert.ok(newState);
});

tape('reducers/navigation: Returns state for unknown action', (assert) => {
  assert.plan(1);
  const state = {};
  const action = {
    type: 'UNKNOWN_ACTION'
  };
  const newState = navigation(state, action);
  assert.equal(state, newState);
});

tape('reducers/navigation: Clones navigation when set', (assert) => {
  assert.plan(1);
  const state = {};
  const action = {
    type: SET_NAVIGATION,
    navigation: {
      1: {},
      2: {}
    }
  };
  const newState = navigation(state, action);
  assert.notEqual(newState[1], action.navigation[1]);
});
