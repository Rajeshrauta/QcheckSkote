import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnPickupComponent } from './return-pickup.component';

describe('ReturnPickupComponent', () => {
  let component: ReturnPickupComponent;
  let fixture: ComponentFixture<ReturnPickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnPickupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReturnPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
