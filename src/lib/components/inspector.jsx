import React from 'react';
import _ from 'lodash';

import LayoutStore from 'lib/stores/layout';
import InspectorProp from './inspector-prop.jsx!';
import classNames from 'classnames';

let activePane = 'common';

function getState() {
  return {
    node: LayoutStore.getSelected(),
    active: activePane
  };
}

let Inspector = React.createClass({

  getInitialState: () => {
    return getState();
  },

  componentDidMount: function() {
    LayoutStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    LayoutStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getState());
  },

  setActivePane: function(e) {
    activePane = e.target.getAttribute('data-pane');
    this.setState(getState());
  },

  getTabClassNames: function(tabName) {
    let active = (tabName === this.state.active);
    return classNames('inspector-tab', `inspector-tab-${tabName}`, {active: active})
  },

  render: function() {
    let node = this.state.node;
    return (
      <div className="inspector fb-panel">
        <h2 className="fb-subheader">Inspector [{node.selector}]</h2>
        <div className="inspector-tabs">
          <div className={this.getTabClassNames('common')}>
            <h3 className="inspector-tab-header" onClick={this.setActivePane} data-pane="common">Common</h3>
            <div className="inspector-props">
              <InspectorProp
                key={`${node.id}-contents`}
                node={node}
                name="contents"
                type="input"
                value={node.contents} />
              <InspectorProp
                key={`${node.id}-selector`}
                node={node}
                name="selector"
                type="input"
                value={node.selector} />
              <InspectorProp
                key={`${node.id}-height`}
                node={node}
                name="height"
                type="input"
                value={node.properties.height} />
              <InspectorProp
                key={`${node.id}-width`}
                node={node}
                name="width"
                type="input"
                value={node.properties.width} />
              <InspectorProp
                key={`${node.id}-border`}
                node={node}
                name="border"
                type="input"
                value={node.properties.border} />
              <InspectorProp
                key={`${node.id}-padding`}
                node={node}
                name="padding"
                type="input"
                value={node.properties.padding} />
              <InspectorProp
                key={`${node.id}-margin`}
                node={node}
                name="margin"
                type="input"
                value={node.properties.margin} />
            </div>
          </div>
          <div className={this.getTabClassNames('container')}>
            <h3 className="inspector-tab-header" onClick={this.setActivePane} data-pane="container">Flex Container</h3>
            <div className="inspector-props">
              <InspectorProp
                key={`${node.id}-display`}
                node={node}
                name="display"
                type="select"
                value={node.properties.display}
                options={['flex', 'inline-flex']} />
              <InspectorProp
                key={`${node.id}-flex-direction`}
                node={node}
                name="flex-direction"
                type="select"
                value={node.properties['flex-direction']}
                options={['row', 'row-reverse', 'column', 'column-reverse']} />
              <InspectorProp
                key={`${node.id}-flex-wrap`}
                node={node}
                name="flex-wrap"
                type="select"
                value={node.properties['flex-wrap']}
                options={['nowrap', 'wrap', 'wrap-reverse']} />
              <InspectorProp
                key={`${node.id}-justify-content`}
                node={node}
                name="justify-content"
                type="select"
                value={node.properties['justify-content']}
                options={['flex-start', 'flex-end', 'center', 'space-between', 'space-around']} />
              <InspectorProp
                key={`${node.id}-align-items`}
                node={node}
                name="align-items"
                type="select"
                value={node.properties['align-items']}
                options={['flex-start', 'flex-end', 'center', 'stretch', 'baseline']} />
              <InspectorProp
                key={`${node.id}-align-content`}
                node={node}
                name="align-content"
                type="select"
                value={node.properties['align-content']}
                options={['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around']} />
            </div>
          </div>
          <div className={this.getTabClassNames('child')}>
            <h3 className="inspector-tab-header" onClick={this.setActivePane} data-pane="child">Flex Child</h3>
            <div className="inspector-props">
              <InspectorProp
                key={`${node.id}-flex-grow`}
                node={node}
                name="flex-grow"
                type="input"
                value={node.properties['flex-grow']} />
              <InspectorProp
                key={`${node.id}-flex-shrink`}
                node={node}
                name="flex-shrink"
                type="input"
                value={node.properties['flex-shrink']} />
              <InspectorProp
                key={`${node.id}-flex-basis`}
                node={node}
                name="flex-basis"
                type="input"
                value={node.properties['flex-basis']} />
              <InspectorProp
                key={`${node.id}-flex`}
                node={node}
                name="flex"
                type="input"
                value={node.properties['flex']} />
              <InspectorProp
                key={`${node.id}-order`}
                node={node}
                name="order"
                type="input"
                value={node.properties['order']} />
              <InspectorProp
                key={`${node.id}-align-self`}
                node={node}
                name="align-self"
                type="select"
                value={node.properties['align-self']}
                options={['flex-start', 'flex-end', 'center', 'stretch', 'baseline']} />
            </div>
          </div>
        </div>
      </div>
    );
  }

});

export default Inspector;
