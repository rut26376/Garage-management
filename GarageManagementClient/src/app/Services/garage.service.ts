import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Garage } from '../Models/garage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
 
  listApi$ = this.getGaragesFromApi();
  listDb$ = this.getGaragesFromDb();
  garageFromApi!: Garage[];
  garageFromDb!: Garage[];
  constructor(private http: HttpClient) {
    this.listApi$.subscribe(data => { this.garageFromApi = data});
    this.listDb$.subscribe(data => { this.garageFromDb = data});
   }

   getGaragesFromApi():Observable<Garage[]> {
    return this.http.get<Garage[]>('http://localhost:5271/getGaragesFromApi');
   }

   getGaragesFromDb():Observable<Garage[]> {
    return this.http.get<Garage[]>('http://localhost:5271/getGaragesFromDb');
   }

   addGaragesToDb(garages: Garage[]):Observable<any> {
    return this.http.post<any>('http://localhost:5271/addGarage', garages);
    }
  
}
