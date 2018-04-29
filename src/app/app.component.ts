import { Component, Renderer2, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalPropertyComponent } from './modal-property/modal-property.component';
import { ComponentCreaterService } from './_service/component.creater.service';
import { TextBoxModel } from './_model/_textbox';

enum fields {
  LABEL = 'label',
  INPUTFIELD = 'inputfield',
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
  isSelectedField = true;
  selectedInputValue: string;

  textBoxModel: TextBoxModel;
  elements: any;

  @ViewChild('playground')
   private playground: ElementRef;

   @ViewChild('finalElements')
    private finalElements: ElementRef;

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
    // this.isSelectedField = true;
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

    if ( this.selectedFieldsName === fields.INPUTFIELD ) {
      this.createInputFields(this.selectedFieldsName);
    }
  }

  createInputFields(data) {
    this.initialState.title = 'Create input fields';
    this.initialState.elementTobeCreated = data;
    this.openModalWithComponent(data, this.initialState);
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
    // console.log(type);


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

  showComponent() {
    // const aa: any[] =  this.componentCreaterService.getElementTobeCreated();
    console.log('FINAL OBJECT : ', this.componentCreaterService.getElementTobeCreated());


    this.componentCreaterService.getElementTobeCreated().forEach(element => {
      console.log(element);
      this.elements = this.componentCreaterService.getElementTobeCreated();
      // if ( element.type === fields.RADIO ) {

      // } else {
      //   this.elements = this.componentCreaterService.getElementTobeCreated();
      // }
      // if (element.type === fields.TEXT) {
      //   const elem = this.renderer.createElement('input');
      //   this.renderer.setStyle(elem, 'height', element.height + 'px');
      //   this.renderer.setStyle(elem, 'width', element.width + 'px');
      //   this.renderer.addClass(elem, 'form-control');
      //   elem.setAttribute('type', element.type);
      //   elem.setAttribute('name', element.name);
      //   this.renderer.appendChild(this.finalElements.nativeElement, elem);
      // }

      // if (element.type === fields.TEXTAREA) {
      //   const elem = this.renderer.createElement(fields.TEXTAREA);
      //   this.renderer.setAttribute(elem, 'id', element.id);
      //   this.renderer.setAttribute(elem, 'name', element.name);
      //   this.renderer.setAttribute(elem, 'cols', elem.cols);
      //   this.renderer.setAttribute(elem, 'rows', elem.rows);
      //   this.renderer.setStyle(elem, 'height', element.height + 'px');
      //   this.renderer.setStyle(elem, 'width', element.width + 'px');
      //   this.renderer.addClass(elem, 'form-control');
      //   this.renderer.appendChild(this.finalElements.nativeElement, elem);
      // }
    });

    this.componentCreaterService.clearElementTobeCreatedArray([]);


  }

}
