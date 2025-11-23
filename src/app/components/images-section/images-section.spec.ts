import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesSection } from './images-section';

describe('ImagesSection', () => {
  let component: ImagesSection;
  let fixture: ComponentFixture<ImagesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
