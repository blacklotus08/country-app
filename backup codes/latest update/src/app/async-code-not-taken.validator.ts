import { AbstractControl } from '@angular/forms';

/* Service */
import { CountriesService } from './countries.service';

/*Model*/
import { Country } from './country.model';
import 'rxjs/add/operator/map';
import { debounceTime } from 'rxjs/operators';

export class ValidateIdNotTaken {
  static countries: Country[];


  static createValidator(countryService: CountriesService) {
    return (control: AbstractControl) => {
      return countryService.CheckCode(control.value).pipe(debounceTime(1000)).map(res => {
          this.countries = res;
          this.countries = this.countries.filter((country: Country) =>
          (country.country_code == control.value || country.country_code.toLocaleLowerCase == control.value.toLowerCase()))

          console.log('Response: ' + JSON.stringify(this.countries));
          console.log('Length: ' + JSON.stringify(this.countries.length));

          if (this.countries.length == 0) {
              console.log('inside');
            return null;
          }else{
            return {record_exist:true};
          }   
      });
    }
  }
}