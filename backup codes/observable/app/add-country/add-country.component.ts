import { Component, OnInit } from '@angular/core';

/*Service*/
import { CountriesService } from '../countries.service';


@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
  }

  addCountry(code,name,region) {
    let countries = {
      country_code   : code,
      country_name   : name,
      country_region : region,

    };
    this.countriesService.addCountry(countries);
    
  }

}
