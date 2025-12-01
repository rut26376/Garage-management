import { Component, inject } from '@angular/core';
import { Garage } from '../../Models/garage';
import { GarageService } from '../../Services/garage.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  
  garageService = inject(GarageService);
  garages:Garage[] = [];
  list$ = this.garageService.list$;
  ngOnInit(): void {

   this.list$.subscribe(data => { this.garages = data; console.log("main page",this.garages) });
   
  }
   
}
