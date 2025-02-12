import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedComponent } from './typed.component';

describe('TypedComponent', () => {
  let component: TypedComponent;
  let fixture: ComponentFixture<TypedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
