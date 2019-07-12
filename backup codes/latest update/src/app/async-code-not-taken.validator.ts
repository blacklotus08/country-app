import { AbstractControl } from '@angular/forms';

/* Service */
import { CountriesService } from './countries.service';

/*Model*/
import { Country } from './country.model';
import 'rxjs/add/operator/map';

export class ValidateIdNotTaken {
  static countries: Country[];


  static createValidator(countryService: CountriesService) {
    return (control: AbstractControl) => {
      return countryService.CheckCode(control.value).map(res => {
          this.countries = res;
          this.countries = this.countries.filter((country: Country) =>
          (country.country_code == control.value || country.country_code == control.value.toUpperCase()))
          console.log('Length: ' + this.countries.length);
          if (this.countries.length === 0) { 
            return {record_exist:null}; 
            
          }else{
            return {record_exist:true};
          }
      });
    }
  }
}