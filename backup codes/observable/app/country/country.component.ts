import { Component, OnInit } from '@angular/core';

/*Model*/
import {Country} from '../country.model';
/*Service*/
import {CountriesService} from '../countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {

  // _listFilter = '';
  // get listFilter(): string {
  //   return this._listFilter;
  // }
  // set listFilter(value: string) {
  //   this._listFilter = value;
  //   this.filteredCountry = this.listFilter ? this.performFilter(this.listFilter) : this.countries;
  // }

  filteredCountry: Country[] = [];
  countries: Country[] = [];  
  errorMessage = '';
  page = 1;
  pageSize = 5;
  collectionSize : number;


  constructor(private countriesService: CountriesService) { }

  // performFilter(filterBy: string): Country[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.countries.filter((country: Country) =>
  //     country.country_code.toLocaleLowerCase().indexOf(filterBy) !== -1 || country.country_name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  // }  

  ngOnInit() {
    this.countriesService.getCountry().subscribe(
      countries => {
          this.countries = countries;
          // this.filteredCountry = this.countries;
          // this.collectionSize = this.filteredCountry.length;
          // this.filteredCountry = this.filteredCountry.map((countries, i) => ({id: i + 1, ...countries}))
          // .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);  
      },
      error => this.errorMessage = <any>error
    );
  }

  // get countries(): Array<any>[] {
  //   return this.countriesService.countries.map((countries, i) => ({id: i + 1, ...countries}))
  //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);    
    
  // }

  // deleteCountry(id) {
  //   this.countriesService.deleteCountry(id,this.countries);
  // }
  

}
