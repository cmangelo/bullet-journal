import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorCardComponent implements OnInit {
  @Input() error$: Observable<string>;
  @Output() clearError = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
