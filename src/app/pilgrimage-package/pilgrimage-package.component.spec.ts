import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilgrimagePackageComponent } from './pilgrimage-package.component';

describe('PilgrimagePackageComponent', () => {
  let component: PilgrimagePackageComponent;
  let fixture: ComponentFixture<PilgrimagePackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilgrimagePackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilgrimagePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
