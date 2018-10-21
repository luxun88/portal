import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxunFooterComponent } from './luxun-footer.component';

describe('LuxunFooterComponent', () => {
  let component: LuxunFooterComponent;
  let fixture: ComponentFixture<LuxunFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuxunFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxunFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
