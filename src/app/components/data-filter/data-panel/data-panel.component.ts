import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilterService} from '../../../services/data/filter.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

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
      type: [null]
    });
  }

  searchClothes(): void {
    const newForm = {...this.Form.value};
    for (const i in newForm) {
      if (!newForm[i]) {
        this.Form.setErrors({vacio: true});
        delete newForm[i];
      }
    }

    this.filterService.filterItems(newForm).subscribe((clothes: any) => {
      if (clothes !== null) {
        this.clothesList.emit({data: clothes, status: 'Loaded'});
      } else {
        this.clothesList.emit({data: [], status: 'error'});
      }
    });
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

  search(): void {
    if (this.Form.get('name').value) {
      this.searchClothes();
    } else {
      this.getAllClothes();
    }
  }

  // tslint:disable-next-line:typedef
}
