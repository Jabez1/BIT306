import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegEmpComponent } from './reg-emp.component';

describe('RegEmpComponent', () => {
  let component: RegEmpComponent;
  let fixture: ComponentFixture<RegEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
