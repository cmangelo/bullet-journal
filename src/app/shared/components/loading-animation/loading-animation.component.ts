import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
