import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/*Service*/
import { CountryDetailService } from '../country-detail.service';
import { CountriesService } from '../countries.service';



@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  constructor(
    private acttivatedRoute: ActivatedRoute,
    private countryDetailService: CountryDetailService,
    private countriesService: CountriesService

  ) { }

  country_name : string;
  param_name   : string;
 
  ngOnInit() {
    this.getCountry();
  }

  getCountry(): void {
    this.acttivatedRoute.params
    .subscribe(
      param => {
        if(param) {
          this.countryDetailService.getCountryDetail(param.name);      
        }
      }
    )
  }

  get country(): Array<any>[] {
    return this.countryDetailService.countries;
  }
 

}
