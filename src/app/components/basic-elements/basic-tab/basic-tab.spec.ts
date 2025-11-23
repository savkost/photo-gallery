import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTab } from './basic-tab';

describe('BasicBtn', () => {
  let component: BasicTab;
  let fixture: ComponentFixture<BasicTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
