import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
