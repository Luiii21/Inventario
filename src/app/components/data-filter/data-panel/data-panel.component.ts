import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilterService} from '../../../services/data/filter.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-data-panel',
  templateUrl: './data-panel.component.html',
  styleUrls: ['./data-panel.component.scss']
})
export class DataPanelComponent implements OnInit {
  @Output() clothesList: EventEmitter<any>;
  Form: FormGroup;
  sizeControl: any[] = [];

  constructor(private filterService: FilterService,
              private fb: FormBuilder) {
    this.clothesList = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.getAllClothes();
    this.initForm();
  }

  getAllClothes(): void {
    this.filterService.getItems().subscribe(clothes => {
      this.clothesList.emit(clothes);
    });
  }

  findClothes(term: string): void {
    this.filterService.filterItems(term).subscribe(data => {
      this.clothesList.emit(data);
    });
  }

  initForm(): void {
    this.Form = this.fb.group({
      color: [null],
      gender: [null],
      name: [null],
      price: [null],
      size: [null],
      type: [null]
    });
  }

  searchClothes(): void {
    const newForm = {...this.Form.value};
    for (const i in newForm) {
      if (!newForm[i]) {
        delete newForm[i];
      }
    }
    this.filterService.filterItems(newForm).subscribe(data => {
      this.clothesList.emit([]);
      this.clothesList.emit(data);
    });
  }
}
