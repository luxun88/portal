import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxunMainMenuComponent } from './luxun-main-menu.component';

describe('LuxunMainMenuComponent', () => {
  let component: LuxunMainMenuComponent;
  let fixture: ComponentFixture<LuxunMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuxunMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxunMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
