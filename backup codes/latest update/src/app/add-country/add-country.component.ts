import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Country } from '../country.model';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


/*Service*/
import { CountriesService } from '../countries.service';
import { ValidateIdNotTaken } from '../async-code-not-taken.validator';
import { debounceTime } from 'rxjs/operators';

// function checkRecord(c: AbstractControl): { [key: string] : boolean } | null {
//   if (c.value == 'CHN') {
//     return {'record_exist':true};

//   }
//   return null;
// }

// function checkRecord(countries): ValidatorFn {
//   console.log('Recrd: ' + JSON.stringify(countries));
//   return (c: AbstractControl): { [key: string]: boolean } | null => {
//     if (c.value == countries.country_code) {
//       return { 'record_exist': true };

//     }
//     return null;
//   }
// }

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})

// export class AddCountryComponent implements OnInit {
export class AddCountryComponent implements OnInit {
  countryForm: FormGroup;
  countries: Country[] = [];
  errorMessage = '';
  codeMessage: string;
  private sub: Subscription;


  private validationMessage = {
    required: 'Please enter country code.'
  };

  constructor(private countriesService: CountriesService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.countriesService.getCountry().subscribe(
      countries => {
        this.countries = countries;
      },
      error => this.errorMessage = <any>error
    );

    this.countryForm = this.fb.group({
      countryCode: ['', [Validators.required]],
      countryName: ['', Validators.required],
      countryRegion: 'Africa'
    });


    // this.countryForm.controls['countryCode'].setAsyncValidators(ValidateIdNotTaken.createValidator(this.countriesService));

    const codeControl = this.countryForm.get('countryCode');
    codeControl.valueChanges.pipe(debounceTime(2000)).subscribe(
      () => {
        this.countryForm.controls['countryCode'].setAsyncValidators(ValidateIdNotTaken.createValidator(this.countriesService));
        this.countryForm.controls['countryCode'].updateValueAndValidity();
      } 
    );
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  // search = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     map(term => term === '' ? []
  //       : this.mock_countries.filter(country => country.country_code.toLowerCase().indexOf(term.toLowerCase()) > -1))
  //   )

  // format_code = (x: {country_code: string}) => x.country_code;
  // formatter(model: any) {
  //   country: model;
  // }

  save() {
    let countries = {
      country_code: this.countryForm.get('countryCode').value,
      country_name: this.countryForm.get('countryName').value,
      country_region: this.countryForm.get('countryRegion').value,
    };
    console.log(JSON.stringify('Save Record:' + countries));
    this.countriesService.addCountry(countries);
    this.router.navigate(['/country']);
    this.toastr.success('Record successfully added.', '',
      {
        positionClass: 'toast-top-center',
        closeButton: true,
        timeOut: 5000
      }
    );

  }

  goBack(): void {
    this.location.back();
  }

  populateTestData(): void {
    this.countryForm.patchValue({
      countryCode: 'CHN',
      countryName: 'China'
    });
  }

  // setMessage(c: AbstractControl): void {
  //   this.codeMessage = '';
  //   if ((c.touched || c.dirty) && c.errors) {
  //     this.codeMessage = Object.keys(c.errors).map(
  //       key => this.codeMessage += this.validationMessage[key]).join(' ');
  //   }
  // }

}
