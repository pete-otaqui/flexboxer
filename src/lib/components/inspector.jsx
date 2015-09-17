import React from 'react';
import _ from 'lodash';

import LayoutStore from 'lib/stores/layout';
import InspectorProp from './inspector-prop.jsx!';

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

  render: function() {
    let node = this.state.node;
    let commonActive = (this.state.active === 'common') ? 'active' : '';
    let containerActive = (this.state.active === 'container') ? 'active' : '';
    let childActive = (this.state.active === 'child') ? 'active' : '';
    return (
      <div className="inspector">
        <h2 className="fb-subheader">Inspector</h2>
        <p className="inspector-selector">{node.selector}</p>
        <div className={`inspector-tab inspector-tab-common ${commonActive}`}>
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
          </div>
        </div>
        <div className={`inspector-tab inspector-tab-container ${containerActive}`}>
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
          </div>
        </div>
        <div className={`inspector-tab inspector-tab-child ${childActive}`}>
          <h3 className="inspector-tab-header" onClick={this.setActivePane} data-pane="child">Flex Child</h3>
          <div className="inspector-props">
            <InspectorProp
              key={`${node.id}-flex-grow`}
              node={node}
              name="flex-grow"
              type="input"
              value={node.properties['flex-grow']} />
            <InspectorProp
              key={`${node.id}-order`}
              node={node}
              name="order"
              type="input"
              value={node.properties['order']} />
          </div>
        </div>
      </div>
    );
  }

});

export default Inspector;
