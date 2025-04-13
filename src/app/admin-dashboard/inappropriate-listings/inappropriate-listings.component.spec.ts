import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InappropriateListingsComponent } from './inappropriate-listings.component';

describe('InappropriateListingsComponent', () => {
  let component: InappropriateListingsComponent;
  let fixture: ComponentFixture<InappropriateListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InappropriateListingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InappropriateListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
