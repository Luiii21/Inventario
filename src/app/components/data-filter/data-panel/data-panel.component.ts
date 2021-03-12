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
  Clothes: any[] = [];

  constructor(private filterService: FilterService,
              private fb: FormBuilder) {
    this.clothesList = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.getAllClothes();
    this.initForm();
  }

  getAllClothes(): void {
    this.clothesList.emit({data: [], status: 'Loading'});
    this.filterService.getItems().subscribe(clothes => {
      this.Clothes = clothes;
      this.clothesList.emit({data: clothes, status: 'Loaded'});
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
    this.clothesList.emit({data: [], status: 'Loading'});
    const newForm = {...this.Form.value};
    for (const i in newForm) {
      if (!newForm[i]) {
        delete newForm[i];
      }
    }

    if (newForm.value) {
      this.filterService.filterItems(newForm).subscribe(clothes => {
        this.Clothes = clothes;
        this.clothesList.emit({data: clothes, status: 'Loaded'});
      });
    }
    this.clothesList.emit({data: this.Clothes, status: 'Loaded'});
  }

  // tslint:disable-next-line:typedef
  orderLowerHigher() {
    if (this.Clothes) {
      // @ts-ignore
      this.Clothes.sort((a, b) => {
        return a.price - b.price;
      });
      this.clothesList.emit({data: this.Clothes, status: 'Loaded'});
    }
  }

  // tslint:disable-next-line:typedef
  orderHigherLower() {
    if (this.Clothes) {
      // @ts-ignore
      this.Clothes.sort((a, b) => {
        return b.price - a.price;
      });
      this.clothesList.emit({data: this.Clothes, status: 'Loaded'});
    }
  }
}
