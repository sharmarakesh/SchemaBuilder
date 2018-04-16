import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

enum fields {
  LABEL,
  TEXT,
  EMAIL,
  PASSWORD,
  TEXTAREA
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myDynamicForm: FormGroup;
  isFormCreated = false;
  title = 'app';
  formGroups: any = {};
  selectedFieldsName;
  @ViewChild('playground')
   private playground: ElementRef;

  constructor(private renderer: Renderer2) {}

  createForm() {
    this.myDynamicForm = new FormGroup(this.formGroups);
    this.isFormCreated = true;

  }
  selectedFiled(event) {
    this.selectedFieldsName = event.target.value;
  }
  createFormFields() {
    if ( this.selectedFieldsName === fields.TEXT) {
      this.formGroups.text = new FormControl();
    }
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('This is div element');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.playground.nativeElement, div);
  }

}
