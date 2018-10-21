import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxunMainSectionComponent } from './luxun-main-section.component';

describe('LuxunMainSectionComponent', () => {
  let component: LuxunMainSectionComponent;
  let fixture: ComponentFixture<LuxunMainSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuxunMainSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxunMainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
