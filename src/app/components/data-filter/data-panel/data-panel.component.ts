import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilterService} from '../../../services/data/filter.service';

@Component({
  selector: 'app-data-panel',
  templateUrl: './data-panel.component.html',
  styleUrls: ['./data-panel.component.scss']
})
export class DataPanelComponent implements OnInit {
  @Output() clothesList: EventEmitter<any>;


  constructor(private filterService: FilterService) {
    this.clothesList = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.getAllClothes();
  }

  getAllClothes(): void {
    this.filterService.getItems().subscribe(clothes => {
      this.clothesList.emit(clothes);
      console.log(clothes);
    });
  }

}
