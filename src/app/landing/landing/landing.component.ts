import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AccountFacade } from 'src/app/account/+state/account.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private accountFacade: AccountFacade) { }

  ngOnInit() {
    this.isLoggedIn$ = this.accountFacade.isLoggedIn$;
  }

}
