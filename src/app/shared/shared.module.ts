import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorCardComponent } from './components/error-card/error-card.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';

@NgModule({
  declarations: [ErrorCardComponent, BasicFormComponent],
  imports: [
    CommonModule
  ],
  exports: [ErrorCardComponent, BasicFormComponent]
})
export class SharedModule { }
