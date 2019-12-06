import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentFactory, ComponentRef, ApplicationRef, Injector, EmbeddedViewRef, Renderer2, ElementRef } from '@angular/core';
import { AlertComponent } from './alert/alert.component';

import { ExampleComponent } from './example/example.component';
import { DialogService } from 'projects/curtain-modal/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-modal';
  componentRef: ComponentRef<any>;

  constructor(private elRef: ElementRef, private resolver: ComponentFactoryResolver,  private appRef: ApplicationRef,
               private injector: Injector, private renderer: Renderer2, public dialog: DialogService) {
                // const ref = this.dialog.open(AlertComponent, {
                //   data: { message: 'I am a dynamic component inside of a dialog!' },
                // });

                // ref.afterClosed.subscribe(result => {
                //   console.log('Dialog closed', result)
                // });
               }

  ngOnDestroy() {
    this.componentRef.destroy();
   }

  createComponent(type) {
    // this.container.clear();
    // const factory = this.resolver.resolveComponentFactory(AlertComponent);
    // this.componentRef = this.container.createComponent(factory);
    // this.componentRef.instance.type = type;
    // console.log(this.componentRef.instance.close);
    // setTimeout(() => {
    //   this.componentRef.instance.close.subscribe(event => console.log(event));
    // }, 1000);
    // ------------------------------------------------------
    // const factory = this.resolver.resolveComponentFactory(AlertComponent);
    // this.componentRef = factory.create(this.injector);
    // this.appRef.attachView(this.componentRef.hostView);

    // const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    // document.body.appendChild(domElem);

    // // this.dialogComponentRef = componentRef;
    // setTimeout(() => {
    //   this.remove();
    // }, 3000);
    // -------------------------------------------------------
    this.dialog.open(ExampleComponent, {});
    setTimeout(() => {
      this.dialog.open(ExampleComponent, {});
    }, 3000);
    setTimeout(() => {
      this.dialog.open(ExampleComponent, {});
    }, 4000);
    setTimeout(() => {
      this.dialog.open(ExampleComponent, {});
    }, 5000);

    setTimeout(() => {
      this.dialog.open(ExampleComponent, {});
    }, 6000);
    setTimeout(() => {
      this.dialog.open(ExampleComponent, {});
    }, 7000);

  }

  remove(){
    // const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0].querySelectorAll('.bounceInRight')[0] as HTMLElement;

    // this.renderer.removeClass(domElem, 'bounceInRight');
    // this.renderer.addClass(domElem, 'bounceOutRight');

    // setTimeout(() => {
    //   this.componentRef.destroy();
    // }, 1000);
  }
}
