import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateNodes, selectNode } from '../actions';
import Header from '../components/header';
import Editor from './editor';
import Output from './output';
import Footer from '../components/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateNodesCb = this.updateNodesCb.bind(this);
    this.selectNodeCb = this.selectNodeCb.bind(this);
  }

  componentDidMount() {
    const { dispatch, nodes } = this.props;
    dispatch(updateNodes(nodes));
  }

  updateNodesCb(nodes) {
    this.props.dispatch(updateNodes(nodes));
  }

  selectNodeCb(node) {
    this.props.dispatch(selectNode(node));
  }

  render() {
    const { tree, navigation = [], selectedNode } = this.props;
    return (
      <div id="app-root">
        <Header onNavigate={this.updateNodesCb} navigation={navigation} />
        <main id="main" className="container">
          <Editor
            selectedNode={selectedNode}
            onSelectNode={this.selectNodeCb}
            tree={tree}
          />
          <Output />
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  nodes: PropTypes.object.isRequired,
  tree: PropTypes.object.isRequired,
  activeIndex: PropTypes.number,
  selectedNode: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.array
};

function mapNodesToTree(state, nodes = {}, nodeItem = null) {
  if ( !nodeItem ) {
    nodeItem = nodes[1] || { childIds: [] };
  }
  let node = Object.assign({}, nodeItem);
  node.isSelected = (nodes.selectedNode === node.id);
  node.children = node.childIds.map((id) => {
    return mapNodesToTree(state, nodes, nodes[id]);
  });
  return node;
}

function mapStateToProps(state) {
  const { nodes, navigation } = state;
  const selectedNode = (nodes.selectedNode) ? nodes[nodes.selectedNode] : null;
  const tree = mapNodesToTree(state, nodes, null);
  return {
    tree,
    nodes,
    selectedNode,
    navigation
  };
}

export default connect(mapStateToProps)(App);
