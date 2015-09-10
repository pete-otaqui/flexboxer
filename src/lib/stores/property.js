import AppDispatcher from 'lib/dispatchers/app-dispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';
import _ from 'lodash';

import * as FlexboxerConstants from 'lib/constants/flexboxer-constants';
import LayoutStore from 'lib/stores/layout';

var properties = {

  'display': {
    type: 'select',
    options: ['flex', 'inline-flex'],
    inParent: true,
    defaultValue: ''
  },
  'flex-direction': {
    type: 'select',
    options: ['row', 'row-reverse', 'column', 'column-reverse'],
    inParent: true,
    defaultValue: 'row'
  },
  'flex-wrap': {
    type: 'select',
    options: ['nowrap', 'wrap', 'wrap-reverse'],
    inParent: true,
    defaultValue: 'nowrap'
  },
  'justify-content': {
    type: 'select',
    options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
    inParent: true,
    defaultValue: 'flex-start'
  },
  'align-items': {
    type: 'select',
    options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
    inParent: true,
    defaultValue: 'stretch'
  },
  'align-content': {
    type: 'select',
    options: ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around'],
    inParent: true,
    defaultValue: 'stretch'
  },

  'order': {
    type: 'input',
    help: 'Positive integer, the order property controls the order in which flex items appear in the flex container.',
    inChild: true
  },
  'flex-grow': {
    type: 'input',
    help: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. Negative numbers are invalid.',
    inChild: true
  },
  'flex-shrink': {
    type: 'input',
    help: 'This defines the ability for a flex item to shrink if necessary. Negative numbers are invalid.',
    inChild: true
  },
  'flex-basis': {
    type: 'input',
    help: 'This defines the default size of an element before the remaining space is distributed. The main-size value makes it match the width or height, depending on which is relevant based on the flex-direction. If set to 0, the extra space around content isn\'t factored in. If set to auto, the extra space is distributed based on it\'s flex-grow value',
    inChild: true
  },
  'align-self': {
    type: 'select',
    options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
    help: 'This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.',
    inChild: true,
    defaultValue: 'stretch'
  }

}

var PropertyStore = assign({}, EventEmitter.prototype, {

  getPropertyListFor(node) {
    let ps = _.clone(properties);
    Object.keys(node.properties).forEach((p) => {
      if ( !ps[p] ) {
        ps[p] = {};
      }
      ps[p].value = node.properties[p];
    });
    let pa = [], p;
    for ( let pn in ps ) {
      p = ps[pn];
      p.name = pn;
      if ( !p.value ) p.value = '';
      pa.push(p);
    }
    return pa;
  },

  getPropertyValueFor(property) {
    let node = LayoutStore.getSelected();
    let list = this.getPropertyListFor(node);
    let val;
    if ( list[property] ) {
      val = list[property].value || '';
    } else {
      val = '';
    }
    return val;
  },

  emitChange: function() {
    this.emit(FlexboxerConstants.CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(FlexboxerConstants.CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(FlexboxerConstants.CHANGE_EVENT, callback);
  }
});

export default PropertyStore;
