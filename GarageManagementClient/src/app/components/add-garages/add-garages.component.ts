import { Component, inject } from '@angular/core';
import { Garage } from '../../Models/garage';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { GarageService } from '../../Services/garage.service';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-add-garages',
  standalone: true,
  imports: [MatSelectModule , FormsModule , CommonModule  , MatButtonModule],
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

  addSelectedGaragesToDb() {
    this.garagService.addGaragesToDb(this.selectedGarages).subscribe(response => {
      console.log('Garages added to DB successfully', response);
      alert('Garages added to DB successfully');
      this.garages.push(...this.selectedGarages);
      this.selectedGarages = [];
    }, error => {
      console.error('Error adding garages to DB', error);
      alert('Error adding garages to DB');
    });
  }
}
