import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DataCreateComponent} from './components/data-create/data-create.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'create', component: DataCreateComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
