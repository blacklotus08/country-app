import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

/*Service*/
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {

  country : Array<any>[];

  constructor(private countriesService: CountriesService) { }

  page = 1;
  pageSize = 5;
  collectionSize : number;


  ngOnInit() {
    this.countriesService.getCountry();
    this.collectionSize  = this.countriesService.record_length;
    console.log(this.countriesService.record_length + 'Component Length');
    // this.collectionSize = this.countriesService.record_length;
  }

  get countries(): Array<any>[] {
    return this.countriesService.countries.map((countries, i) => ({id: i + 1, ...countries}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);    
    
  }

  deleteCountry(id) {
    this.countriesService.deleteCountry(id,this.countries);
  }
  

}
