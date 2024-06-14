import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UntypedComponent } from './untyped.component';

describe('UntypedComponent', () => {
  let component: UntypedComponent;
  let fixture: ComponentFixture<UntypedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UntypedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UntypedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
