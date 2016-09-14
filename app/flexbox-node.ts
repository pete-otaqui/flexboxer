import { FlexboxStyle } from './flexbox-style';

export class FlexboxNode {

  tagName: string = 'div';
  styles: FlexboxStyle[] = new Array();
  className: string = this.generateClassName();

  id: number;
  parentId: number;
  childIds: number[] = new Array();

  constructor(
    id: number,
    options?: {
      tagName?: string,
      styles?: FlexboxStyle[],
      className?: string,
      childIds?: number[],
      parentId?: number
    }) {
    this.id = id;
    if ( options ) {
      if ( options.tagName ) this.tagName = options.tagName;
      if ( options.styles ) this.styles = options.styles;
      if ( options.className ) this.className = options.className;
      if ( options.childIds ) this.childIds = options.childIds;
      if ( options.parentId ) this.parentId = options.parentId;
    }
  }

  generateClassName(prefix: string = 'fb-'):string {
    const random = Math.round(Math.random() * 1000000);
    return `${prefix}-${random}`;
  }
}
