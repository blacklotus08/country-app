import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import {Country} from './country.model';


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

  constructor(private httpService: HttpClient) { }  
  getCountry():Observable<Country[]>  {
    return this.httpService.get<Country[]>(this.baseUrl,this.httpOptions).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),catchError(this.handleError)
    );
               
    /*this.httpService.get(this.baseUrl,this.httpOptions)
    .subscribe((countries :Array<any>[]) => {
      this.countries = countries;
      this.setLength(countries.length);    
    })
    ; 
    */ 
  }



  getCountryById(id) {
    // this.httpService.get(this.baseUrl + '/' + id,this.httpOptions)
    // .subscribe((countries :Array<any>[]) => { 
    //   this.countries = countries;
    //   console.log(this.countries);
    // }
    // ); 
  }

   
  addCountry(countries) {
    // this.httpService.post(this.baseUrl,countries,this.httpOptions).subscribe(countries);
    // this.getCountry();
    // alert("Record successfully added.");

  }  

  updateCountry(id, countries) {
    // this.httpService.put(this.baseUrl + '/' + id,countries,this.httpOptions).subscribe(countries);
    // this.getCountry();
    // alert("Record successfully updated.");
  }

  deleteCountry(id, countries) {
    // this.httpService.delete(this.baseUrl + '/' + id,this.httpOptions).subscribe(countries);
    // alert("Record successfully deleted.");
    // this.getCountry();
    
  }  

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage + 'Error');
    return throwError(errorMessage);
  }

}
