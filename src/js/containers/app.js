import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateTreeIfNeeded, updateTree } from '../actions'
import Header from '../components/header'
import Editor from './editor'
import Output from './output'
import Footer from '../components/footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const { dispatch, tree } = this.props
    dispatch(updateTree(tree))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tree !== this.props.tree) {
      const { dispatch, tree } = nextProps
      dispatch(updateTree(tree))
    }
  }

  handleChange(nextItem) {
    // this.props.dispatch(updateTree(nextItem))
  }

  render() {
    const { tree } = this.props
    return (
      <div id="app-root">
        <Header />
        <main id="main" className="container">
          <Editor />
          <Output />
        </main>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  tree: PropTypes.array.isRequired,
  activeIndex: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { tree, activeIndex } = state;
  console.log(state);
  const selectedNode = (activeIndex) ? tree[activeIndex] : null;
  return {
    tree,
    selectedNode
  }
}

export default connect(mapStateToProps)(App)
