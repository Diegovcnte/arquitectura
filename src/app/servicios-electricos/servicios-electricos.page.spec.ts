import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiciosElectricosPage } from './servicios-electricos.page';

describe('ServiciosElectricosPage', () => {
  let component: ServiciosElectricosPage;
  let fixture: ComponentFixture<ServiciosElectricosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ServiciosElectricosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
