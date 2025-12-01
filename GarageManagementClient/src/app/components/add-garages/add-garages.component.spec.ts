import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGaragesComponent } from './add-garages.component';

describe('AddGaragesComponent', () => {
  let component: AddGaragesComponent;
  let fixture: ComponentFixture<AddGaragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGaragesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddGaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
