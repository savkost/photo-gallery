import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationDialog } from './verification-dialog';

describe('VerificationDialog', () => {
  let component: VerificationDialog;
  let fixture: ComponentFixture<VerificationDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificationDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
