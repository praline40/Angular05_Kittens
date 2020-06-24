import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRacineComponent } from './app-racine.component';

describe('AppRacineComponent', () => {
  let component: AppRacineComponent;
  let fixture: ComponentFixture<AppRacineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRacineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRacineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
