import { Component, inject } from '@angular/core';
import { Garage } from '../../Models/garage';
import { GarageService } from '../../Services/garage.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatTableModule, CommonModule , MatSelectModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {


  garageService = inject(GarageService);
  displayedColumns: string[] = [];
  garages: Garage[] = [];
  list$ = this.garageService.list$;
  ngOnInit(): void {
    this.list$.subscribe(data => {
      this.garages = data;
      this.displayedColumns = Object.keys(this.garages[0]);
    });
  }

}
