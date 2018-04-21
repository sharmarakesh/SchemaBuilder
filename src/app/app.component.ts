import { Component, Renderer2, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalPropertyComponent } from './modal-property/modal-property.component';
import { ComponentCreaterService } from './_service/component.creater.service';
import { TextBoxModel } from './_service/_model/_textbox';

enum fields {
  LABEL = 'label',
  TEXT = 'text',
  EMAIL = 'email',
  PASSWORD = 'password',
  TEXTAREA = 'textarea',
  RADIO = 'radio'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() openModelEvent = new EventEmitter();

  myDynamicForm: FormGroup;
  isFormCreated = false;
  title = 'app';
  formGroups: any = {};
  selectedFieldsName;
  isSelectedField = false;

  textBoxModel: TextBoxModel;

  @ViewChild('playground')
   private playground: ElementRef;

   bsModalRef: BsModalRef;
  message: string;

  initialState = {
    list: [],
    title: '',
    elementTobeCreated: ''
  };


  constructor(private renderer: Renderer2,
     private modalService: BsModalService,
    private componentCreaterService: ComponentCreaterService) {}

  createForm() {
    this.myDynamicForm = new FormGroup(this.formGroups);
    this.isFormCreated = true;

  }
  selectedFiled(event) {
    this.isSelectedField = true;
    this.selectedFieldsName = event.target.value;
  }
  createFormFields() {
    if ( this.selectedFieldsName === fields.TEXT) {
      this.createTextField(this.selectedFieldsName);
    }
    if ( this.selectedFieldsName === fields.TEXTAREA) {
      this.createTextAreaField(this.selectedFieldsName);
    }
    if ( this.selectedFieldsName === fields.RADIO) {
      this.createRadioField(this.selectedFieldsName);
    }
  }

  createTextField(data) {
    // this.formGroups.text = new FormControl();
    // const div = this.renderer.createElement('div');
    // const text = this.renderer.createText('This is text element');
    // this.renderer.appendChild(div, text);
    // this.renderer.appendChild(this.playground.nativeElement, div);
    this.initialState.title = 'Create text box';
    this.initialState.elementTobeCreated = data;
    this.openModalWithComponent(data, this.initialState);
  }

  createTextAreaField(data) {
    // this.formGroups.text = new FormControl();
    // const div = this.renderer.createElement('div');
    // const text = this.renderer.createText('This is textarea element');
    // this.renderer.appendChild(div, text);
    // this.renderer.appendChild(this.playground.nativeElement, div);
    this.initialState.title = 'Create textarea box';
    this.initialState.elementTobeCreated = data;
    this.openModalWithComponent(data, this.initialState);
  }

  createRadioField(data) {
    // this.formGroups.text = new FormControl();
    // const div = this.renderer.createElement('div');
    // const text = this.renderer.createText('This is textarea element');
    // this.renderer.appendChild(div, text);
    // this.renderer.appendChild(this.playground.nativeElement, div);
    this.initialState.title = 'Create radio button';
    this.initialState.elementTobeCreated = data;
    this.openModalWithComponent(data, this.initialState);
  }

  openModalWithComponent(type: string, initialState) {
    console.log(type);


    const config = {
      backdrop: true,
      ignoreBackdropClick: true
    };
    this.bsModalRef = this.modalService.show(ModalPropertyComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.bsModalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.bsModalRef.hide();
  }
}
