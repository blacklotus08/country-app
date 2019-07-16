import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Country } from '../country.model';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

/* Data */
import { COUNTRIES } from '../mock-country';

/*Service*/
import { CountriesService } from '../countries.service';
import { ValidateIdNotTaken } from '../async-code-not-taken.validator';


function countryCheck(c : AbstractControl) : {[key:string] : boolean} | null {
  let list = COUNTRIES.filter((country: Country) =>
  (country.country_name == c.value || country.country_name.toLocaleLowerCase == c.value.toLowerCase() 
   || country.country_code == c.value || country.country_code.toLocaleLowerCase == c.value.toLowerCase() 
  )).length;
  if (c.value != '' && list == 0) {
      return { 'country_check' : true }
  }

  return null;

}

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})

export class AddCountryComponent implements OnInit {
  countryForm: FormGroup;
  countries: Country[] = [];
  errorMessage = '';
  codeMessage: string;
  private sub: Subscription;
  public mockcountries = COUNTRIES;
  public filteredcountries;

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
      countryCode: ['', [Validators.required, countryCheck]],
      countryName: ['', [Validators.required, countryCheck]],
      countryRegion: 'Africa'
    });

    this.countryForm.controls['countryCode'].setAsyncValidators(ValidateIdNotTaken.createValidator(this.countriesService));
    this.filteredcountries = COUNTRIES;

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

  }

  get countryCode() {
    return this.countryForm.get('countryCode');
  }

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
  
  public selectEvent(country): void {
    let code = country.target.value;
    let list = COUNTRIES.filter(x => x.country_code === code)[0];
    this.countryForm.patchValue({
      countryCode: list.country_code,
      countryName: list.country_name
    });
  }

  public pressedKey(country) {
    let value = country.target.value;
    // this.filteredcountries = COUNTRIES.filter(country => country.country_code.toLocaleLowerCase().indexOf(value) !== -1 
    //                                       || country.country_name.toLocaleLowerCase().indexOf(value) !== 0)
    //                                   .slice(1,10);   
    this.filteredcountries = COUNTRIES.filter(country => country.country_code.toLocaleLowerCase().indexOf(value) !== -1).slice(1,10);     
  }
 
}
