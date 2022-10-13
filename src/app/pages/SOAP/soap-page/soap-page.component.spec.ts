import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapPageComponent } from './soap-page.component';

describe('SoapPageComponent', () => {
  let component: SoapPageComponent;
  let fixture: ComponentFixture<SoapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoapPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
