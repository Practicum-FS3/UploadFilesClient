import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmosComponent } from './hmos.component';

describe('HmosComponent', () => {
  let component: HmosComponent;
  let fixture: ComponentFixture<HmosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HmosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
