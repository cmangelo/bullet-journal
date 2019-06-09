import { Component, OnInit } from '@angular/core';

import { AccountFacade } from './account/+state/account.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'bullet-journal';

  constructor(private accountFacade: AccountFacade) { }

  ngOnInit() {
    this.accountFacade.getUser();
  }
}
