import { Component } from '@angular/core';
import { Garage } from '../../Models/garage';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-garages',
  standalone: true,
  imports: [MatSelectModule , FormsModule],
  templateUrl: './add-garages.component.html',
  styleUrl: './add-garages.component.css'
})
export class AddGaragesComponent {
 selectedGarages: Garage[] = [];
}
