import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[libInsertion]',
})
export class InsertionDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
