import {
  Component,
  Type,
  OnDestroy,
  AfterViewInit,
  ComponentFactoryResolver,
  ComponentRef,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core'
import { InsertionDirective } from './insertion.directive'
import { Subject } from 'rxjs'
import { DialogRef } from './dialog-ref';

@Component({
  selector: 'lib-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements AfterViewInit, OnDestroy {
  private readonly _onClose = new Subject<any>()

  public componentRef: ComponentRef<any>
  public childComponentType: Type<any>
  public onClose = this._onClose.asObservable()

  // add this:
  @ViewChild(InsertionDirective, {static: false})
  insertionPoint: InsertionDirective

  // and this:
  constructor(public dialog: DialogRef, private componentFactoryResolver: ComponentFactoryResolver, private cd: ChangeDetectorRef) {
    console.log('11110', this.dialog);
  }

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
    console.log('onOverlayClicked');
    this.dialog.close('some value');
  }


  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation()
  }

  loadChildComponent(componentType: Type<any>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
}


}

