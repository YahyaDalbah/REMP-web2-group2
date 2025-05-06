import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPropertiesComponent } from './crud-properties.component';

describe('CrudPropertiesComponent', () => {
  let component: CrudPropertiesComponent;
  let fixture: ComponentFixture<CrudPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudPropertiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
