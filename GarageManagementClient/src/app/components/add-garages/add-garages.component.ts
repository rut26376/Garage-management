import { Component, inject } from '@angular/core';
import { Garage } from '../../Models/garage';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { GarageService } from '../../Services/garage.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-garages',
  standalone: true,
  imports: [MatSelectModule , FormsModule , CommonModule],
  templateUrl: './add-garages.component.html',
  styleUrl: './add-garages.component.css'
})
export class AddGaragesComponent {
 selectedGarages: Garage[] = [];
 garagService = inject(GarageService);
 listApi$ = this.garagService.listApi$;
 garages: Garage[] = [];
 ngOnInit(): void {
  this.listApi$.subscribe(data => {
    this.garages = data;
  }); 
 }
}
