import _ from 'lodash';

let samples = {
  "holy grail": {
    id: 1,
    contents: '',
    properties: {display: 'flex', 'min-height': '20vh', 'flex-direction': 'column'},
    selector: '.HolyGrail',
    children: [
      {
        id: 2,
        contents: 'HEADER',
        selector: '.header',
        children: [],
        properties: {margin: '1em'}
      },
      {
        id: 3,
        contents: '',
        selector: '.HolyGrail-body',
        properties: {
          display: 'flex',
          flex: 1,
          margin: '1em'
        },
        children: [
          {
            id: 4,
            contents: 'CONTENT - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            selector: '.HolyGrail-content',
            children: [],
            properties: {flex: 1, margin: '1em'}
          },
          {
            id: 5,
            contents: 'NAV',
            selector: '.HolyGrail-nav',
            children: [],
            properties: {flex: '0 0 12em', order: -1, margin: '1em'}
          },
          {
            id: 6,
            contents: 'ADS',
            selector: '.HolyGrail-ads',
            children: [],
            properties: {flex: '0 0 12em', margin: '1em'}
          }
        ]
      },
      {
        id: 7,
        contents: 'FOOTER',
        selector: '.footer',
        children: [],
        properties: {margin: '1em'}
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
