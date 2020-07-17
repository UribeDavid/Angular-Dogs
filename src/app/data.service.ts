import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class DataService {

  constructor(private http: HttpClient) {}

  getDogs() : Observable<any> {
   return this.http.get('https://dog.ceo/api/breeds/list/all');
  }
  getDogImage(raza: string) : Observable<any> {
    return this.http.get(`https://dog.ceo/api/breed/${raza}/images/random`);
   }
}
