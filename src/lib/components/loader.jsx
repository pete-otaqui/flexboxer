import React from 'react';
import LayoutStore from 'lib/stores/layout';
import LayoutActions from 'lib/actions/layout-actions';

class Loader extends React.Component {
  clicked(e) {
    e.preventDefault();
    e.stopPropagation();
    let sample = e.target.getAttribute('data-sample');
    LayoutActions.loadSample(sample);
  }
  render() {
    let samples = this.props.samples;
    return (<p className="loader">Load a sample layout:
      {samples.map((sample) => {
        return (<span key={`sample-${sample}`}> <a
          href="#"
          data-sample={sample}
          onClick={this.clicked.bind(this)}>
            {sample}
        </a> </span>)
      })}
    </p>);
  }
}

export default Loader
