import {AfterContentChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss']
})
export class DataFilterComponent {
  receivedClothes: any[] = [];

  constructor() {
  }
}
