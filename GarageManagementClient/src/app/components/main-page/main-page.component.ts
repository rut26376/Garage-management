import { Component, inject, Output } from '@angular/core';
import { Garage } from '../../Models/garage';
import { GarageService } from '../../Services/garage.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { GarageTableComponent } from '../garage-table/garage-table.component';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatTableModule, CommonModule , MatSelectModule , FormsModule , GarageTableComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {


  selectedGarages: Garage[] = [];

}
