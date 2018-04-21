import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Form } from '@angular/forms';

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

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
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

    this.radioFormGroup = new FormGroup({
      name: new FormControl()
    }
    );
  }

  addRadioButtonValues() {
    this.values.push('');
  }

  createElement() {

  }

}
