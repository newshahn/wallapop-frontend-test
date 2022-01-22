import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlpItemWrapperComponent } from './wlp-item-wrapper.component';

describe('WlpItemWrapperComponent', () => {
  let component: WlpItemWrapperComponent;
  let fixture: ComponentFixture<WlpItemWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WlpItemWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WlpItemWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
