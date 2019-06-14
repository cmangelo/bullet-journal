import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ErrorCardComponent } from './components/error-card/error-card.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';

@NgModule({
  declarations: [ErrorCardComponent, BasicFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [ErrorCardComponent, BasicFormComponent]
})
export class SharedModule { }
