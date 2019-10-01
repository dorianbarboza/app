import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicitacionesPage } from './licitaciones.page';

describe('LicitacionesPage', () => {
  let component: LicitacionesPage;
  let fixture: ComponentFixture<LicitacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicitacionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicitacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
