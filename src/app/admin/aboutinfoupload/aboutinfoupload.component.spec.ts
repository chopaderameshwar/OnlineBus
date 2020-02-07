import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutinfouploadComponent } from './aboutinfoupload.component';

describe('AboutinfouploadComponent', () => {
  let component: AboutinfouploadComponent;
  let fixture: ComponentFixture<AboutinfouploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutinfouploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutinfouploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
