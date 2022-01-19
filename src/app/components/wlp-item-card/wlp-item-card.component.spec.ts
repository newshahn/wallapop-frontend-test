import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlpItemCardComponent } from './wlp-item-card.component';

describe('WlpItemCardComponent', () => {
  let component: WlpItemCardComponent;
  let fixture: ComponentFixture<WlpItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WlpItemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WlpItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
