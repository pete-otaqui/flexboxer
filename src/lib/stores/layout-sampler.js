import _ from 'lodash';

let samples = {
  "default": {
    id: 1,
    contents: '',
    properties: {display: 'flex'},
    selector: '.root',
    children: [
      {id: 2, contents: 'one', selector: '.one', properties: {height: '200px'}, children: [], selected: true},
      {id: 3, contents: 'two', selector: '.two', properties: {'flex-grow': '2'}, children: []},
      {id: 4, contents: 'three', selector: '.three', properties: {'order': '2'}, children: []},
      {id: 5, contents: 'four', selector: '.four', properties: {'order': '1'}, children: []}
    ]
  },
  "holy grail": {
    id: 1,
    selected: true,
    contents: '',
    properties: {display: 'flex', 'min-height': '20vh', 'flex-direction': 'column'},
    selector: '.HolyGrail',
    children: [
      {
        id: 2,
        contents: 'HEADER',
        selector: '.header',
        children: [],
        properties: {}
      },
      {
        id: 3,
        contents: '',
        selector: '.HolyGrail-body',
        properties: {
          display: 'flex',
          flex: 1
        },
        children: [
          {
            id: 4,
            contents: 'CONTENT',
            selector: '.HolyGrail-content',
            children: [],
            properties: {flex: 1}
          },
          {
            id: 5,
            contents: 'NAV',
            selector: '.HolyGrail-nav',
            children: [],
            properties: {flex: '0 0 12em', order: -1}
          },
          {
            id: 6,
            contents: 'ADS',
            selector: '.HolyGrail-ads',
            children: [],
            properties: {flex: '0 0 12em'}
          }
        ]
      },
      {
        id: 7,
        contents: 'FOOTER',
        selector: '.footer',
        children: [],
        properties: {}
      }
    ]
  },
  "vertical center": {
    id: 1,
    selector: '.Aligner',
    contents: '',
    selected: true,
    properties: {
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'height': '300px'
    },
    children: [
      {
        id: 2,
        selector: '.Aligner-item',
        contents: 'CENTERED VERTICALLY AND HORIZONTALLY',
        properties: {
          'max-width': '50%',
          'border': '1px solid #000'
        },
        children: []
      }
    ]
  }
};

function layoutSampler(sampleName) {
  if ( !samples[sampleName] ) {
    throw new Error("Invalid sample name: " + sampleName);
  }
  return _.cloneDeep(samples[sampleName]);
};
layoutSampler.sampleNames = Object.keys(samples);

export default layoutSampler;
