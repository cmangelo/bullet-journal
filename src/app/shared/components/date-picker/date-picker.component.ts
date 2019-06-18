import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DateParams } from '../../models/date-params.interface';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerComponent implements OnInit {
  @Input() dateParams: DateParams;
  @Input() date: Date;
  @Output() dateChange = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
  }

  incrementMonth(inc: number) {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + inc);
    this.dateChange.emit(this.date);
  }
}
