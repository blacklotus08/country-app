import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseUrl : string = 'https://country-41d6.restdb.io/rest/country-header';

  httpOptions = {
    headers: new HttpHeaders({
      'x-apikey' : '5d10446782ef885d6e621bc2',
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  public countries : Array<any>[];

  public record_length : number;

  public length_handler : number;

  constructor(private httpService: HttpClient) { }  
 
  getCountry() {
    this.httpService.get(this.baseUrl,this.httpOptions)
    .subscribe((countries :Array<any>[]) => {
      this.countries = countries;
      this.setLength(countries.length);    
    })
    ;        
  }

  setLength(length) {
    this.record_length = length;
    console.log(length + "Length");
  }

  getCountryById(id) {
    this.httpService.get(this.baseUrl + '/' + id,this.httpOptions)
    .subscribe((countries :Array<any>[]) => { 
      this.countries = countries;
      console.log(this.countries);
    }
    ); 
  }

   
  addCountry(countries) {
    this.httpService.post(this.baseUrl,countries,this.httpOptions).subscribe(countries);
    this.getCountry();
    alert("Record successfully added.");

  }  

  updateCountry(id, countries) {
    this.httpService.put(this.baseUrl + '/' + id,countries,this.httpOptions).subscribe(countries);
    this.getCountry();
    alert("Record successfully updated.");
  }

  deleteCountry(id, countries) {
    this.httpService.delete(this.baseUrl + '/' + id,this.httpOptions).subscribe(countries);
    alert("Record successfully deleted.");
    this.getCountry();
    
  }  
}
