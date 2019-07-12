import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/*Service*/
import { CountriesService } from '../countries.service';


@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnInit {

  

  constructor(private acttivatedRoute: ActivatedRoute,private countriesService: CountriesService) { }

  ngOnInit() {
    this.getCountry();
  }

  getCountry(): void {
    this.acttivatedRoute.params
    .subscribe(
      param => {
        if(param) {
          this.countriesService.getCountryById(param.id);          
        }
      }
    )
  }

  // get countries(): Array<any>[] {
  //   return this.countriesService.countries; 
  // }

  // updateCountry(id: number) {
  //   this.countriesService.updateCountry(id,this.countries);    
  // }
  
}
