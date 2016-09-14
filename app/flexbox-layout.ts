import { FlexboxNode } from './flexbox-node';
import { FlexboxStyle } from './flexbox-style';

export class FlexboxLayout {
  id: number;
  slug: string;
  title: string;
  description: string;
  nodes: FlexboxNode[] = new Array();
}
