import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FilterService} from '../../../services/data/filter.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-data-create',
  templateUrl: './data-create.component.html',
  styleUrls: ['./data-create.component.scss']
})
export class DataCreateComponent implements OnInit {
  Form: FormGroup;
  Loading: boolean;

  constructor(private fb: FormBuilder, private filterService: FilterService, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.Form = this.fb.group({
      id: [Math.random()],
      name: [null, [Validators.required]],
      trademark: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      type: [null, [Validators.required]],
      price: [null, [Validators.required]],
      size: [null, [Validators.required]],
      color: [null, [Validators.required]]
    });
  }

  saveProduct(): void {
    const data = {...this.Form.value};
    data.price = data.price.toString();

    this.filterService.registerItem(data).subscribe(() => {
      this.router.navigate(['buscar']).finally();
    });
  }
}
