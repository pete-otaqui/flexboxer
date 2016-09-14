import { Component } from '@angular/core';

import { FlexboxLayout } from './flexbox-layout';
import { FlexboxNode } from './flexbox-node';
import { FlexboxStyle } from './flexbox-style';

@Component({
  selector: 'my-app',
  template: `
    <header><h1>{{title}}</h1></header>
    <main>
      <h2>{{currentLayout.title}}</h2>
      <p>{{currentLayout.description}}</p>
      <html-output [fbLayout]=currentLayout></html-output>
    </main>
    <footer>Built by Pete Otaqui</footer>
  `
})

export class AppComponent {
  title = 'Flexboxer';
  currentLayout: FlexboxLayout = {
    id: 1,
    slug: 'one-true-layout',
    title: 'One True Layout',
    description: 'Awesome basic website layout',
    nodes: [
      new FlexboxNode(1, {
        className: 'root',
        childIds: [2, 3, 4],
        styles: [
          new FlexboxStyle({property: 'width', value: '900px'}),
          new FlexboxStyle({property: 'margin', value: '0 auto'}),
        ]
      }),
      new FlexboxNode(2, {className: 'header', tagName: 'header'}),
      new FlexboxNode(3, {className: 'main', tagName: 'main'}),
      new FlexboxNode(4, {className: 'footer', tagName: 'footer'})
    ]
  }
}
