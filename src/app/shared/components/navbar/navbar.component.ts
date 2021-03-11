import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FilterService} from '../../../services/data/filter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
