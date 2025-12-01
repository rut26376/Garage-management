import { Component } from '@angular/core';
import { AddGaragesComponent } from '../add-garages/add-garages.component'; 
import { GarageTableComponent } from '../garage-table/garage-table.component';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ GarageTableComponent , AddGaragesComponent ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {


 

}
