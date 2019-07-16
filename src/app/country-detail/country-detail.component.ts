import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';
/*Service*/
import { CountryDetailService } from '../country-detail.service';


@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  constructor(
    private acttivatedRoute: ActivatedRoute,
    private countryDetailService: CountryDetailService,
    private spinner: NgxSpinnerService,
    private location: Location

  ) { }

  country_name: string;
  param_name: string;

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.getCountry();
    }, 2000);
    
  }

  getCountry(): void {
    this.acttivatedRoute.params
      .subscribe(
        param => {
          if (param) {
            this.countryDetailService.getCountryDetail(param.name);           
          }
        }
      )
      this.spinner.hide();
  }

  get country(): Array<any>[] {
    return this.countryDetailService.countries;
  }

  goBack(): void {
    this.countryDetailService.countries = [];
    this.location.back();
  }


}
