import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifswichComponent } from './ngifswich.component';

describe('NgifswichComponent', () => {
  let component: NgifswichComponent;
  let fixture: ComponentFixture<NgifswichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifswichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifswichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
