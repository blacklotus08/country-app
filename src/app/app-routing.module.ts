import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountryComponent} from './country/country.component';
import {CountryDetailComponent} from './country-detail/country-detail.component';
import {AddCountryComponent} from './add-country/add-country.component';
import {EditCountryComponent} from './edit-country/edit-country.component';
import { CountryEditGuard } from './country-edit.guard';

const routes: Routes = [
  { path: '', component : CountryComponent },
  { path: 'country' , component : CountryComponent },
  { path: 'country-detail/:name' , component : CountryDetailComponent },
  { path: 'add-country' , component : AddCountryComponent },
  { path: 'edit-country/:id' ,
    canDeactivate : [CountryEditGuard],
    component : EditCountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
