import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ErrorCardComponent } from './components/error-card/error-card.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { LoadingAnimationComponent } from './components/loading-animation/loading-animation.component';

@NgModule({
  declarations: [ErrorCardComponent, BasicFormComponent, DatePickerComponent, LoadingAnimationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [ErrorCardComponent, BasicFormComponent, DatePickerComponent, LoadingAnimationComponent]
})
export class SharedModule { }
