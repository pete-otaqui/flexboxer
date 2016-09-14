import { Component, OnInit, Input } from '@angular/core';

import { FlexboxLayout } from './flexbox-layout';
import { FlexboxNode } from './flexbox-node';
import { FlexboxStyle } from './flexbox-style';

@Component({
  moduleId: module.id,
  selector: 'html-output',
  templateUrl: 'html-output.component.html'
})
export class HtmlOutputComponent implements OnInit {

  @Input()
  fbLayout:FlexboxLayout;

  ngOnInit() { }
}
