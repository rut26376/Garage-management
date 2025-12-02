import { Component, inject, Input } from '@angular/core';
import { Garage } from '../../Models/garage';
import { GarageService } from '../../Services/garage.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-garage-table',
  standalone: true,
  imports: [MatTableModule, CommonModule , MatSelectModule , FormsModule],
  templateUrl: './garage-table.component.html',
  styleUrl: './garage-table.component.css'
})
export class GarageTableComponent {

  garageService = inject(GarageService);
  displayedColumns: string[] = ["_id" , "mispar_mosah" , "shem_mosah" , "cod_sug_mosah" , "sug_mosah" , "ktovet" , "yishuv" , "telephone" , "mikud" , "cod_miktzoa" , "miktzoa" , "menahel_miktzoa" , "rasham_havarot" , "TESTIME"];
  @Input()
  garages: Garage[] = [];
  listDb$ = this.garageService.listDb$;
  ngOnInit(): void {
    this.listDb$.subscribe(data => {
      this.garages = data;
    });
  }
}
