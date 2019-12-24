import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subscription, fromEvent, merge } from 'rxjs';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


import { Country } from '../country.model';
/*Service*/
import { CountriesService } from '../countries.service';


@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnInit {
  countryForm: FormGroup;
  errorMessage = '';
  country: Country;
  countries: Country[] = [];
  AllCountries: Country;
  collectionSize: number;
  private sub: Subscription;


  constructor(private acttivatedRoute: ActivatedRoute,
              private countriesService: CountriesService,
              private spinner: NgxSpinnerService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private fb: FormBuilder,
              private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.countryForm = this.fb.group({
      countryCode: ['', [Validators.required]],
      countryName: ['', Validators.required],
      countryRegion: 'Africa'
    });

    const param = this.acttivatedRoute.snapshot.paramMap.get('id');
    this.acttivatedRoute.params
      .subscribe(
        param => {
          if (param) {
            this.spinner.show();
            this.getCountry(param.id);
          }
        }
      );
  }

  getCountry(id): void {
    this.countriesService.getCountryById(id)
      .subscribe(
        (country: Country) => this.displayCountry(country),
        (error: any) => this.errorMessage = error as any
      );
  }

  displayCountry(country: Country): void {
    console.log(JSON.stringify(country));
    if (this.countryForm) {
      this.countryForm.reset();
    }
    this.country = country;

    // Update the data on the form
    this.countryForm.patchValue({
      countryCode: this.country.country_code,
      countryName: this.country.country_name,
      countryRegion: this.country.country_region
    });
    this.spinner.hide();
  }


  saveCountry(): void {
    const param = this.acttivatedRoute.snapshot.paramMap.get('id');
    this.acttivatedRoute.params
      .subscribe(
        param => {
          if (param) {
            const countries = {
              country_code: this.countryForm.get('countryCode').value,
              country_name: this.countryForm.get('countryName').value,
              country_region: this.countryForm.get('countryRegion').value,
            };

            this.countriesService.updateCountry(param.id, countries);
            this.countriesService.getCountry().subscribe(
              countries => {
                this.countries = countries;

              },
              error => this.errorMessage = error as any
            );
            this.router.navigate(['/country']);
            this.toastr.success('Record successfully updated.', '',
              {
                positionClass: 'toast-top-center',
                closeButton: true,
                timeOut: 5000
              }
            );


          }
        }
      );
    // if (this.countryForm.valid) {
    //   if (this.countryForm.dirty) {
    //     const p = { ...this.country, ...this.countryForm.value };

    //     if (p.id === 0) {

    //     } else {
    //       this.countriesService.updateCountry(p)
    //         .subscribe(
    //           () => this.onSaveComplete(),
    //           (error: any) => this.errorMessage = <any>error
    //         );
    //     }
    //   } else {
    //     this.onSaveComplete();
    //   }
    // } else {
    //   this.errorMessage = 'Please correct the validation errors.';
    // }
  }


  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.countryForm.reset();
    this.router.navigate(['/country']);
  }





  // updateCountry(id) {
  // this.countriesService.updateCountry(id, this.countries);
  // this.countriesService.getCountry().subscribe(
  //   countries => {
  //     this.countries = countries;

  //   },
  //   error => this.errorMessage = <any>error
  // );

  // }

  goBack(): void {
    this.location.back();
  }

}
