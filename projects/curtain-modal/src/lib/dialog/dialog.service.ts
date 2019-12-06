import {
  Injectable,
  RendererFactory2,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
  Type,
  Renderer2
} from "@angular/core";

import { DialogComponent } from "./dialog.component";
import { DialogConfig } from "./dialog-config";
import { DialogRef } from "./dialog-ref";
import { DialogInjector } from "./dialog-injector";

@Injectable({
  // providedIn: DialogModule
  providedIn: 'root',
})
export class DialogService {
  // dialogComponentRef: [ComponentRef<DialogComponent>];
  dialogComponentRef = [];
  private renderer: Renderer2;
  constructor(
    private rendererFactory: RendererFactory2,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public open(componentType: Type<any>, config: DialogConfig) {
    const dialogRef = this.appendDialogComponentToBody(config);

    this.dialogComponentRef[
      this.dialogComponentRef.length - 1
    ].instance.childComponentType = componentType;

    return dialogRef;
  }

  private appendDialogComponentToBody(config: DialogConfig) {
    const map = new WeakMap();
    map.set(DialogConfig, config);

    // add the DialogRef to dependency injection
    const dialogRef = new DialogRef();
    map.set(DialogRef, dialogRef);

    // we want to know when somebody called the close mehtod
    const sub = dialogRef.afterClosed.subscribe(() => {
      // close the dialog
      this.removeDialogComponentFromBody();
      sub.unsubscribe();
    });

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      DialogComponent
    );
    const componentRef = componentFactory.create(
      new DialogInjector(this.injector, map)
    );

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    console.log(this.dialogComponentRef.length);
    if(this.dialogComponentRef.length>0){
    const olddomElem = (this.dialogComponentRef[this.dialogComponentRef.length - 1]
      .hostView as EmbeddedViewRef<any>).rootNodes[0].querySelectorAll(
      ".dialog"
    )[0] as HTMLElement;
    const newwidth = (olddomElem.offsetWidth+20)+'px';
    this.renderer.setStyle(olddomElem, 'WebkitTransition', "all 0.5s" );
    this.renderer.setStyle(olddomElem, 'transition', "all 0.5s" );
    this.renderer.setStyle(olddomElem, 'width', newwidth );


  }
    this.dialogComponentRef.push(componentRef);

    // return the dialogRef
    return dialogRef;
  }

  private removeDialogComponentFromBody() {

    const domElem = (this.dialogComponentRef[this.dialogComponentRef.length - 1]
      .hostView as EmbeddedViewRef<any>).rootNodes[0].querySelectorAll(
      ".bounceInRight"
    )[0] as HTMLElement;

    this.renderer.removeClass(domElem, "bounceInRight");
    this.renderer.addClass(domElem, "bounceOutRight");



    setTimeout(() => {
      this.appRef.detachView(
        this.dialogComponentRef[this.dialogComponentRef.length - 1].hostView
      );
      // this.dialogComponentRef[this.dialogComponentRef.length - 1].destroy();
      this.dialogComponentRef.pop();
      if(this.dialogComponentRef.length>0){
        const olddomElem = (this.dialogComponentRef[this.dialogComponentRef.length - 1]
          .hostView as EmbeddedViewRef<any>).rootNodes[0].querySelectorAll(
          ".dialog"
        )[0] as HTMLElement;
        const newwidth = (olddomElem.offsetWidth-40)+'px';

        this.renderer.setStyle(olddomElem, 'width', newwidth );
          }
    }, 400);

  }
}
