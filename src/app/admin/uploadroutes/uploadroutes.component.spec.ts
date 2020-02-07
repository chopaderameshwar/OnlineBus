import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadroutesComponent } from './uploadroutes.component';

describe('UploadroutesComponent', () => {
  let component: UploadroutesComponent;
  let fixture: ComponentFixture<UploadroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
