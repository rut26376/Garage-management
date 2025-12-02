import { Component, inject, Output } from '@angular/core';
import { Garage } from '../../Models/garage';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { GarageService } from '../../Services/garage.service';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { EventEmitter } from '@angular/core';
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
 listDb$ = this.garagService.listDb$;
 @Output()
 garagesUpdated: EventEmitter<Garage[]> = new EventEmitter<Garage[]>();
 garages: Garage[] = [];
 choosenGarages: Garage[] = [];


 ngOnInit(): void {
  this.listApi$.subscribe(data => {
    this.garages = data;
  }); 
  this.listDb$.subscribe(data => {
    this.choosenGarages = data;  
  });
  }

  addSelectedGaragesToDb() {
    this.selectedGarages = this.selectedGarages.filter(garage => 
      !this.choosenGarages.some(chosen => chosen._id === garage._id)
    );
    this.garagService.addGaragesToDb(this.selectedGarages).subscribe(response => {
      this.choosenGarages.push(...this.selectedGarages);
      this.garagesUpdated.emit(this.selectedGarages);
      this.selectedGarages = [];
    }, error => {
      console.error('Error adding garages to DB', error);
      alert('Error adding garages to DB');
    });
  }
}
