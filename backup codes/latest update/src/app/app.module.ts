import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
 


import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { AppRoutingModule } from './app-routing.module';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { EditCountryComponent } from './edit-country/edit-country.component';



@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryDetailComponent,
    AddCountryComponent,
    EditCountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSpinnerModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    AutocompleteLibModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
