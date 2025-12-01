import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Garage } from '../Models/garage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
 
  list$ = this.getGaragesFromApi();
  garageLst!: Garage[];
  constructor(private http: HttpClient) {
    this.list$.subscribe(data => { this.garageLst = data});
   }

   getGaragesFromApi():Observable<Garage[]> {
    return this.http.get<Garage[]>('http://localhost:5271/getGaragesFromApi');
   }
  
}
