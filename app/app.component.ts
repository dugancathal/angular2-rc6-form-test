import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><container></container>'
})
export class AppComponent {
    public title:string = 'Hello, Angular'
}