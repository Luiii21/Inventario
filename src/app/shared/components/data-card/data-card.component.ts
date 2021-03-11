import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss']
})
export class DataCardComponent {
  @Input() clothesReceivedList: any = {};

  constructor() {
  }
}
