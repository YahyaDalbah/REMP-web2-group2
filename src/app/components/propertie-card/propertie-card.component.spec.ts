import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertieCardComponent } from './propertie-card.component';

describe('PropertieCardComponent', () => {
  let component: PropertieCardComponent;
  let fixture: ComponentFixture<PropertieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertieCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
