import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtrosServiciosPage } from './otros-servicios.page';

describe('OtrosServiciosPage', () => {
  let component: OtrosServiciosPage;
  let fixture: ComponentFixture<OtrosServiciosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OtrosServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
