import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Form, FormArray, Validators } from '@angular/forms';
import { ComponentCreaterService } from '../_service/component.creater.service';

@Component({
  selector: 'app-modal-property',
  templateUrl: './modal-property.component.html',
  styleUrls: ['./modal-property.component.css']
})
export class ModalPropertyComponent implements OnInit {

  title: string;
  closeBtnName: string;
  list: any[] = [];
  elementTobeCreated: string;
  values: string[] = [];

  textFormGroup: FormGroup;
  textAreaFormGroup: FormGroup;
  radioFormGroup: FormGroup;
  inputFormGroup: FormGroup;
  selectedInputValue: string;
  finalObjectTobeConverted: any = [];
  options = ['text', 'email', 'number', 'password', 'date', 'url', 'datetime-local', 'month'];

  constructor(public bsModalRef: BsModalRef, private componentCreaterService: ComponentCreaterService) {}

  ngOnInit() {
    // this.closeBtnName = 'close';
    this.list.push('PROFIT!!!');
    this.textFormGroup = new FormGroup({
      id : new FormControl(),
      name: new FormControl(),
      height: new FormControl(),
      width: new FormControl()
    }
    );

    this.textAreaFormGroup = new FormGroup({
      id : new FormControl(),
      name: new FormControl(),
      height: new FormControl(),
      width: new FormControl(),
      rows: new FormControl(),
      cols: new FormControl()
    }
    );

    this.inputFormGroup = new FormGroup({
      type: new FormControl(),
      id: new FormControl(),
      label: new FormControl(),
      placeholder: new FormControl()
    });

    this.radioFormGroup = new FormGroup({
      'name': new FormControl(),
      'type': new FormControl('radio'),
      'id': new FormControl(),
      'label': new FormControl(),
      'radioOptions': new FormArray([])
    }
    );
  }


  selectedInputOnChange(event) {
    // console.log(event);
    this.selectedInputValue = event.value;
  }

  get radioOptions(): FormArray {
    return this.radioFormGroup.get('radioOptions') as FormArray;
 }

  addRadioButtonValues() {
    // this.values.push('');
    const control = new FormControl();
    (<FormArray>this.radioFormGroup.get('radioOptions')).push(control);
  }
  updateValue(event, i) {
      this.values[i] = (<HTMLInputElement>event.target).value;
  }

  createElement() {
  //   if ( this.elementTobeCreated === 'text') {
  //       const textObj = this.textFormGroup.value;
  //       textObj.type = this.elementTobeCreated;
  //       this.componentCreaterService.setElementTobeCreated(textObj);
  //   }
  //   if ( this.elementTobeCreated === 'textarea') {
  //     const textAreaObj = this.textAreaFormGroup.value;
  //     textAreaObj.type = this.elementTobeCreated;
  //     this.componentCreaterService.setElementTobeCreated(textAreaObj);
  // }

    if ( this.elementTobeCreated === 'inputfield') {
      const inputElemObj = this.inputFormGroup.value;
      this.componentCreaterService.setElementTobeCreated(inputElemObj);
    }

    if ( this.elementTobeCreated === 'radio' ) {
      const inputElemObj = this.radioFormGroup.value;
      console.log(inputElemObj);
      this.componentCreaterService.setElementTobeCreated(inputElemObj);
    }

    // console.log('OBJECT : ', this.finalObjectTobeConverted);
    this.bsModalRef.hide();
  }

  getDisableState() {
    if (this.elementTobeCreated === 'text') {
      // console.log((this.textFormGroup.touched && this.textFormGroup.valid));
      const dd = (this.textFormGroup.touched && this.textFormGroup.valid) === true ? true : false;
      // console.log('DD : ' + dd);
      return !dd;
    }
    if (this.elementTobeCreated === 'textarea') {
      // console.log((this.textAreaFormGroup.touched && this.textAreaFormGroup.valid));
      const cc =  (this.textAreaFormGroup.touched && this.textAreaFormGroup.valid) === true ? true : false;
      // console.log('CC : ' + cc);
      return !cc;
    }
    if (this.elementTobeCreated === 'radio') {
      // console.log((this.radioFormGroup.touched && this.radioFormGroup.valid));
      const ee =  (this.radioFormGroup.touched && this.radioFormGroup.valid) === true ? true : false;
     // console.log('EE : ' + ee);
      return !ee;
    }
    return false;
  }

}
