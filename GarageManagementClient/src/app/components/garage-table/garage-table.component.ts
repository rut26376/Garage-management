import { Component, inject, Input } from '@angular/core';
import { Garage } from '../../Models/garage';
import { GarageService } from '../../Services/garage.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-garage-table',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatSelectModule, FormsModule, MatProgressSpinnerModule, MatInputModule],
  templateUrl: './garage-table.component.html',
  styleUrl: './garage-table.component.css',
})
export class GarageTableComponent {

  garageService = inject(GarageService);
  displayedColumns: string[] = ["_id", "mispar_mosah", "shem_mosah", "cod_sug_mosah", "sug_mosah", "ktovet", "yishuv", "telephone", "mikud", "cod_miktzoa", "miktzoa", "menahel_miktzoa", "rasham_havarot", "TESTIME"];
  filterBy: string[] = ["ktovet", "yishuv", "miktzoa", "menahel_miktzoa"];
  displayGarages: Garage[] = [];
  filterValues: { [key: string]: string } = {};
  @Input()
  garages: Garage[] = [];
  listDb$ = this.garageService.listDb$;
  isLoading: boolean = true;
  ngOnInit(): void {
    this.listDb$.subscribe(data => {
      this.garages = data;
      this.isLoading = false;
      this.displayGarages.push(...this.garages);
    });
  }

  search(event: Event, type: string) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    if (filterValue === '') {
      delete this.filterValues[type];
    } else {
      this.filterValues[type] = filterValue;
    }
    this.displayGarages = this.garages.filter(garage => {
      for (const key in this.filterValues) {
        if (this.filterValues.hasOwnProperty(key)) {
          const filter = this.filterValues[key];
          const value = (garage as any)[key];
          if (value && !value.toString().toLowerCase().includes(filter)) {
            return false;
          }
        }
      }
      return true;
    });
  }
}
