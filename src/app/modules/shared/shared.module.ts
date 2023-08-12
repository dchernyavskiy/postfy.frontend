import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import {FormsModule} from "@angular/forms";
import { RelativeTimePipe } from './pipes/relative-time.pipe';



@NgModule({
    declarations: [
        ModalWindowComponent,
        RelativeTimePipe
    ],
  exports: [
    ModalWindowComponent,
    RelativeTimePipe
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    FormsModule
  ]
})
export class SharedModule { }
