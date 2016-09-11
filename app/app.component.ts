import {Component} from "@angular/core";
import {ContainerComponent} from "./container/container.component";

@Component({
  selector: 'my-app',
  directives: [ContainerComponent],
  template: '<h1>{{title}}</h1><container></container>',
})
export class AppComponent {
  public title: string = 'Hello, Angular'
}