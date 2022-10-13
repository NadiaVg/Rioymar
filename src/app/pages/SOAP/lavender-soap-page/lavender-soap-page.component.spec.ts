import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavenderSoapPageComponent } from './lavender-soap-page.component';

describe('LavenderSoapPageComponent', () => {
  let component: LavenderSoapPageComponent;
  let fixture: ComponentFixture<LavenderSoapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LavenderSoapPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LavenderSoapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
