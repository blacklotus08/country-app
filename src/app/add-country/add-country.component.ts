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
      error => this.errorMessage = error as any
    );

    this.countryForm = this.fb.group({
      countryCode: ['', [Validators.required]],
      countryName: ['', Validators.required],
      countryRegion: 'Africa'
    });

    this.countryForm.controls.countryCode.setAsyncValidators(ValidateIdNotTaken.createValidator(this.countriesService));

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

  }

  get countryCode() {
    return this.countryForm.get('countryCode');
  }

  save() {
    const countries = {
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

}
