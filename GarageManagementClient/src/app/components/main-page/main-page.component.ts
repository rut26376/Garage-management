import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddGaragesComponent } from '../add-garages/add-garages.component'; 
import { GarageTableComponent } from '../garage-table/garage-table.component';
import { Garage } from '../../Models/garage';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ GarageTableComponent , AddGaragesComponent ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
    garages: any[] = [];  
  
  onGaragesUpdated(updatedGarages: any[]) {
    this.garages = [...this.garages, ...updatedGarages];
  }

}
