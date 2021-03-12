import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DataCreateComponent} from './components/data-filter/data-create/data-create.component';
import {DataFilterComponent} from './components/data-filter/data-filter.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'crear', component: DataCreateComponent
  },
  {
    path: 'buscar', component: DataFilterComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
