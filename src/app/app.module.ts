import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalPropertyComponent } from './modal-property/modal-property.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ComponentCreaterService } from './_service/component.creater.service';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalPropertyComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [ComponentCreaterService],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalPropertyComponent
],
})
export class AppModule { }
