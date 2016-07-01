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
    const { nodes, navigation = [] } = this.props;
    return (
      <div id="app-root">
        <Header onNavigate={this.updateNodesCb} navigation={navigation} />
        <main id="main" className="container">
          <Editor onSelectNode={this.selectNodeCb} nodes={nodes} />
          <Output />
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  nodes: PropTypes.object.isRequired,
  activeIndex: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.array
};

function mapStateToProps(state) {
  const { nodes, activeIndex, navigation } = state;
  const selectedNode = (activeIndex) ? nodes[activeIndex] : null;
  return {
    nodes,
    selectedNode,
    navigation
  };
}

export default connect(mapStateToProps)(App);
