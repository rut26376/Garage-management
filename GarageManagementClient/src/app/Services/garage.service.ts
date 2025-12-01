import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Garage } from '../Models/garage';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  garages:Garage[] = [];
  constructor(private http: HttpClient) {

   }
   ngOnInit(): void {
    this.http.get<Garage[]>('http://localhost:5271/getGaragesFromApi').subscribe(data => {
      this.garages = data;
      console.log("this.garages:", this.garages);
      
    }); 
   }
}
