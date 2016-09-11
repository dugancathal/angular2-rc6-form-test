import {Component, Input} from "@angular/core";
import {FormGroup, Validators, FormControl, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";

@Component({
  selector: 'child',
  directives: [REACTIVE_FORM_DIRECTIVES],
  template: `
    <form [formGroup]="formGroup">
        <input type="text" formControlName="name"/>    
    </form>
    <button type="submit" [disabled]="!formGroup.valid || (formGroup.valid && !formGroup.dirty)">Add</button>
  `
})
export class ChildComponent {
  @Input() model;
  private formGroup: FormGroup;

  ngOnChanges(changes) {
    this.initializeForm(changes.model.currentValue || {});
  }

  private initializeForm(model) {
    this.formGroup = new FormGroup({
      name: new FormControl(model.name, Validators.required)
    });
  }
}

@Component({
  selector: 'container',
  directives: [ChildComponent],
  template: `
    <button (click)="setModel({name: 'Foo'})">Foo</button>
    <button (click)="setModel({name: 'Bar'})">Bar</button>
    <button (click)="setModel({name: ''})">Reset</button>
    <child [model]="model"></child>
  `
})
export class ContainerComponent {
  private model;

  setModel(model) {
    this.model = model;
  }
}