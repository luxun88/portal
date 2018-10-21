import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxunMainAsideComponent } from './luxun-main-aside.component';

describe('LuxunMainAsideComponent', () => {
  let component: LuxunMainAsideComponent;
  let fixture: ComponentFixture<LuxunMainAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuxunMainAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxunMainAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
