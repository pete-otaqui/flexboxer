import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateTree, selectNode } from '../actions';
import Header from '../components/header';
import Editor from './editor';
import Output from './output';
import Footer from '../components/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateTreeCb = this.updateTreeCb.bind(this);
    this.selectNodeCb = this.selectNodeCb.bind(this);
  }

  componentDidMount() {
    const { dispatch, tree } = this.props;
    dispatch(updateTree(tree));
  }

  updateTreeCb(tree) {
    this.props.dispatch(updateTree(tree));
  }

  selectNodeCb(node) {
    this.props.dispatch(selectNode(node));
  }

  render() {
    const { tree, navigation = [] } = this.props;
    return (
      <div id="app-root">
        <Header onNavigate={this.updateTreeCb} navigation={navigation} />
        <main id="main" className="container">
          <Editor onSelectNode={this.selectNodeCb} tree={tree} />
          <Output />
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  tree: PropTypes.object.isRequired,
  activeIndex: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.array
};

function mapStateToProps(state) {
  const { tree, activeIndex, navigation } = state;
  const selectedNode = (activeIndex) ? tree[activeIndex] : null;
  return {
    tree,
    selectedNode,
    navigation
  };
}

export default connect(mapStateToProps)(App);
