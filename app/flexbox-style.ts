export class FlexboxStyle {
  property: string = '';
  value: string = '';

  constructor(options?: {property?:string, value?: string}) {
    if ( options ) {
      if ( options.property ) this.property = options.property;
      if ( options.value ) this.property = options.value;
    }
  }
}
