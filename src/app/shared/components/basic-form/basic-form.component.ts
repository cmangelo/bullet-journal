import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicFormComponent implements OnInit {
  @Input() formGroupIn: FormGroup;
  @Input() loading$: Observable<boolean>;
  @Input() buttonText: string;
  @Input() buttonLoadingText: string;
  @Output() submitForm = new EventEmitter<any>();
  formGroupControls: Array<any>;

  constructor() { }

  ngOnInit() {
    this.formGroupToIterable();
  }

  formGroupToIterable() {
    this.formGroupControls = Object.keys(this.formGroupIn.controls).map(key => this.formGroupIn.controls[key]);
    console.log(this.formGroupControls)
  }

}
