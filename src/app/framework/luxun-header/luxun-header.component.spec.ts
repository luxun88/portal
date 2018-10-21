import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxunHeaderComponent } from './luxun-header.component';

describe('LuxunHeaderComponent', () => {
  let component: LuxunHeaderComponent;
  let fixture: ComponentFixture<LuxunHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuxunHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxunHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
